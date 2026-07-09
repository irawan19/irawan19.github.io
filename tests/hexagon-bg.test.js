/**
 * Unit tests for assets/js/hexagon-bg.js
 *
 * The module renders an animated hexagon grid onto a <canvas>. Canvas 2D is
 * provided by jest-canvas-mock; requestAnimationFrame is stubbed so we can run
 * frames deterministically instead of looping. We assert grid generation,
 * per-frame drawing, resize regeneration, and mouse tracking.
 */
const { loadScript } = require('./helpers/loadScript');

function setWindowSize(width, height) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, writable: true, value: width });
  Object.defineProperty(window, 'innerHeight', { configurable: true, writable: true, value: height });
}

let rafCallbacks;

beforeEach(() => {
  rafCallbacks = [];
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
    rafCallbacks.push(cb);
    return rafCallbacks.length;
  });
  // hexagon-bg.js references the bare global requestAnimationFrame.
  global.requestAnimationFrame = window.requestAnimationFrame;
});

afterEach(() => {
  jest.restoreAllMocks();
  document.body.innerHTML = '';
});

/** Run the most recently scheduled animation frame. */
function runNextFrame() {
  const cb = rafCallbacks.pop();
  if (cb) cb();
}

describe('without a canvas element', () => {
  test('returns early and does not schedule an animation frame', () => {
    document.body.innerHTML = '<div>no canvas here</div>';
    expect(() => loadScript('assets/js/hexagon-bg.js')).not.toThrow();
    expect(window.requestAnimationFrame).not.toHaveBeenCalled();
  });
});

describe('with a canvas element', () => {
  let ctx;
  let strokeSpy;
  let beginPathSpy;
  let clearRectSpy;

  function setupCanvasAndLoad(width = 800, height = 600) {
    setWindowSize(width, height);
    document.body.innerHTML = '<canvas id="hexagonal-canvas"></canvas>';
    ctx = document.getElementById('hexagonal-canvas').getContext('2d');
    strokeSpy = jest.spyOn(ctx, 'stroke');
    beginPathSpy = jest.spyOn(ctx, 'beginPath');
    clearRectSpy = jest.spyOn(ctx, 'clearRect');
    loadScript('assets/js/hexagon-bg.js');
  }

  test('sizes the canvas to the window and draws a grid on the first frame', () => {
    setupCanvasAndLoad(800, 600);
    const canvas = document.getElementById('hexagonal-canvas');
    expect(canvas.width).toBe(800);
    expect(canvas.height).toBe(600);

    // The initial animate() call clears the canvas and strokes every hexagon.
    expect(clearRectSpy).toHaveBeenCalledWith(0, 0, 800, 600);
    expect(strokeSpy.mock.calls.length).toBeGreaterThan(0);
    // One beginPath + one stroke per hexagon.
    expect(beginPathSpy.mock.calls.length).toBe(strokeSpy.mock.calls.length);
    // And it re-schedules itself.
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

  test('a larger canvas produces more hexagons per frame after resize', () => {
    setupCanvasAndLoad(400, 300);
    const smallFrameStrokes = strokeSpy.mock.calls.length;
    expect(smallFrameStrokes).toBeGreaterThan(0);

    strokeSpy.mockClear();
    setWindowSize(1600, 1200);
    window.dispatchEvent(new window.Event('resize'));
    runNextFrame();
    const largeFrameStrokes = strokeSpy.mock.calls.length;

    const canvas = document.getElementById('hexagonal-canvas');
    expect(canvas.width).toBe(1600);
    expect(canvas.height).toBe(1200);
    expect(largeFrameStrokes).toBeGreaterThan(smallFrameStrokes);
  });

  test('tracks mouse position and clears it on mouseleave without throwing', () => {
    setupCanvasAndLoad(800, 600);

    const move = new window.Event('mousemove');
    move.clientX = 100;
    move.clientY = 120;
    expect(() => {
      window.dispatchEvent(move);
      runNextFrame();
    }).not.toThrow();

    expect(() => {
      window.dispatchEvent(new window.Event('mouseleave'));
      runNextFrame();
    }).not.toThrow();

    // Frames keep drawing after interaction.
    expect(strokeSpy.mock.calls.length).toBeGreaterThan(0);
  });
});
