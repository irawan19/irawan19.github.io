/**
 * Unit tests for the interactive UI wiring in assets/js/main.js
 *
 * Complements main-portfolio-pagination.test.js by exercising the header/nav
 * toggles, preloader, welcome sound, scroll-top button, typed.js init, skills
 * waypoint handler, isotope filters and swiper init. All third-party libraries
 * are stubbed and just enough DOM is provided for each feature.
 */
const { loadScript } = require('./helpers/loadScript');
const { trackListeners, cleanupListeners } = require('./helpers/domListeners');

let audioMock;
let typedInstances;
let waypointConfigs;
let isotopeInstances;
let swiperCalls;

function stubLibs() {
  global.PureCounter = jest.fn();
  global.GLightbox = jest.fn();
  global.AOS = { init: jest.fn() };

  audioMock = { play: jest.fn(() => Promise.resolve()), volume: 0 };
  global.Audio = jest.fn(() => audioMock);

  typedInstances = [];
  global.Typed = jest.fn(function (selector, options) {
    typedInstances.push({ selector, options });
  });

  waypointConfigs = [];
  global.Waypoint = jest.fn(function (config) {
    waypointConfigs.push(config);
  });

  isotopeInstances = [];
  global.Isotope = jest.fn(function (container, options) {
    this.container = container;
    this.options = options;
    this.arrange = jest.fn();
    isotopeInstances.push(this);
  });
  global.imagesLoaded = jest.fn((el, cb) => cb());

  swiperCalls = [];
  global.Swiper = jest.fn(function (el, config) {
    swiperCalls.push({ el, config });
  });

  window.scrollTo = jest.fn();
}

function setScrollY(value) {
  Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value });
}

function fireLoad() {
  window.dispatchEvent(new window.Event('load'));
}

function click(el) {
  el.dispatchEvent(new window.Event('click', { bubbles: true, cancelable: true }));
}

const FULL_DOM =
  '<i class="header-toggle bi bi-list"></i>' +
  '<header id="header">' +
  '  <nav id="navmenu" class="navmenu">' +
  '    <ul>' +
  '      <li><a href="#hero">Home</a></li>' +
  '      <li class="dropdown"><a href="#">More <i class="toggle-dropdown"></i></a><ul class="dropdown-menu"></ul></li>' +
  '    </ul>' +
  '  </nav>' +
  '</header>' +
  '<a class="scroll-top" href="#"></a>' +
  '<div id="preloader"></div>' +
  '<span class="typed" data-typed-items="Engineer, Developer, Builder"></span>' +
  '<div class="skills-animation">' +
  '  <div class="progress"><div class="progress-bar" aria-valuenow="90"></div></div>' +
  '</div>' +
  '<div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">' +
  '  <ul class="isotope-filters">' +
  '    <li data-filter="*" class="filter-active">All</li>' +
  '    <li data-filter=".web">Web</li>' +
  '  </ul>' +
  '  <div class="isotope-container"></div>' +
  '</div>' +
  '<div class="init-swiper">' +
  '  <script type="application/json" class="swiper-config">{"loop":true,"speed":600}</script>' +
  '</div>';

beforeEach(() => {
  trackListeners();
  stubLibs();
  setScrollY(0);
  document.body.className = '';
  document.body.innerHTML = FULL_DOM;
});

afterEach(() => {
  cleanupListeners();
  jest.restoreAllMocks();
  document.body.innerHTML = '';
});

describe('header + nav toggles', () => {
  beforeEach(() => loadScript('assets/js/main.js'));

  test('clicking the header toggle opens and closes the mobile header', () => {
    const header = document.querySelector('#header');
    const btn = document.querySelector('.header-toggle');

    click(btn);
    expect(header.classList.contains('header-show')).toBe(true);
    expect(btn.classList.contains('bi-x')).toBe(true);
    expect(btn.classList.contains('bi-list')).toBe(false);

    click(btn);
    expect(header.classList.contains('header-show')).toBe(false);
    expect(btn.classList.contains('bi-list')).toBe(true);
  });

  test('toggle-dropdown click toggles active + dropdown-active classes', () => {
    const toggle = document.querySelector('.toggle-dropdown');
    const parent = toggle.parentNode; // the <a>
    click(toggle);
    expect(parent.classList.contains('active')).toBe(true);
    expect(parent.nextElementSibling.classList.contains('dropdown-active')).toBe(true);
  });

  test('nav link click closes the header when it is open', () => {
    const btn = document.querySelector('.header-toggle');
    click(btn); // open
    expect(document.querySelector('#header').classList.contains('header-show')).toBe(true);

    click(document.querySelector('#navmenu a[href="#hero"]'));
    expect(document.querySelector('#header').classList.contains('header-show')).toBe(false);
  });
});

describe('preloader', () => {
  test('is removed on window load', () => {
    loadScript('assets/js/main.js');
    expect(document.querySelector('#preloader')).not.toBeNull();
    fireLoad();
    expect(document.querySelector('#preloader')).toBeNull();
  });
});

describe('welcome sound', () => {
  test('plays once on the first body interaction after load', () => {
    loadScript('assets/js/main.js');
    fireLoad();
    expect(audioMock.play).not.toHaveBeenCalled();

    click(document.body);
    expect(audioMock.play).toHaveBeenCalledTimes(1);
  });
});

describe('scroll-top button', () => {
  beforeEach(() => loadScript('assets/js/main.js'));

  test('gains the active class only when scrolled past 100px', () => {
    const scrollTop = document.querySelector('.scroll-top');

    setScrollY(50);
    document.dispatchEvent(new window.Event('scroll'));
    expect(scrollTop.classList.contains('active')).toBe(false);

    setScrollY(200);
    document.dispatchEvent(new window.Event('scroll'));
    expect(scrollTop.classList.contains('active')).toBe(true);
  });

  test('clicking it smooth-scrolls to the top', () => {
    click(document.querySelector('.scroll-top'));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});

describe('third-party initialisations', () => {
  test('typed.js is initialised from data-typed-items and cycles colors', () => {
    loadScript('assets/js/main.js');
    expect(typedInstances.length).toBe(1);
    expect(typedInstances[0].options.strings).toEqual(['Engineer', 'Developer', 'Builder']);
    // preStringTyped callback should run without error and set a color.
    expect(() => typedInstances[0].options.preStringTyped(1)).not.toThrow();
    expect(document.querySelector('.typed').style.color).not.toBe('');
  });

  test('skills waypoint handler fills progress bar width from aria-valuenow', () => {
    loadScript('assets/js/main.js');
    expect(waypointConfigs.length).toBe(1);
    const bar = document.querySelector('.progress-bar');
    expect(bar.style.width).toBe('');
    waypointConfigs[0].handler();
    expect(bar.style.width).toBe('90%');
  });

  test('isotope is initialised and filters rearrange the layout', () => {
    loadScript('assets/js/main.js');
    expect(isotopeInstances.length).toBe(1);

    const webFilter = document.querySelector('.isotope-filters li[data-filter=".web"]');
    click(webFilter);
    expect(isotopeInstances[0].arrange).toHaveBeenCalledWith({ filter: '.web' });
    expect(webFilter.classList.contains('filter-active')).toBe(true);
    expect(global.AOS.init).toHaveBeenCalled();
  });

  test('swiper is initialised from the .swiper-config JSON on load', () => {
    loadScript('assets/js/main.js');
    fireLoad();
    expect(swiperCalls.length).toBe(1);
    expect(swiperCalls[0].config).toEqual({ loop: true, speed: 600 });
  });
});
