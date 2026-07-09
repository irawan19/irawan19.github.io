/**
 * Hexagon background motif - white lines with pulse + mouse animation.
 * Requires: <canvas id="hexagonal-canvas"></canvas> in the page.
 */
(function () {
  var canvas = document.getElementById('hexagonal-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Hexagon background: unable to get 2D rendering context.');
    return;
  }
  var hexagons = [];
  var time = 0;
  var mouse = { x: undefined, y: undefined };

  var HEX_RADIUS = 40;
  var HEX_GAP = 5;
  var PULSE_SPEED = 0.002;
  var MOUSE_RADIUS = 250;
  var HEX_WHITE_RGB = '255, 255, 255';
  var HEX_CYAN_RGB = '0, 255, 255'; /* #00FFFF */

  function drawHexagon(x, y, radius, color, lineWidth) {
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
      var angle = (Math.PI / 3) * i + Math.PI / 6;
      var px = x + radius * Math.cos(angle);
      var py = y + radius * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  function createHexGrid() {
    hexagons = [];
    var hexWidth = Math.sqrt(3) * HEX_RADIUS;
    var hexHeight = 2 * HEX_RADIUS;
    var horizSpacing = hexWidth + HEX_GAP;
    var vertSpacing = hexHeight * 0.75 + HEX_GAP;
    var cols = Math.ceil(canvas.width / horizSpacing) + 1;
    var rows = Math.ceil(canvas.height / vertSpacing) + 1;

    for (var row = -1; row < rows; row++) {
      for (var col = -1; col < cols; col++) {
        var x = col * horizSpacing + (row % 2 !== 0 ? horizSpacing / 2 : 0);
        var y = row * vertSpacing;
        hexagons.push({
          x: x,
          y: y,
          pulseOffset: Math.random() * Math.PI * 2
        });
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    time++;

    hexagons.forEach(function (hex) {
      var distToMouse = mouse.x !== undefined && mouse.y !== undefined
        ? Math.sqrt(Math.pow(hex.x - mouse.x, 2) + Math.pow(hex.y - mouse.y, 2))
        : Infinity;
      var mouseEffect = Math.max(0, 1 - distToMouse / MOUSE_RADIUS);
      var basePulse = (Math.sin(time * PULSE_SPEED + hex.pulseOffset) + 1) / 2;
      var finalIntensity = Math.min(1, basePulse * 0.5 + mouseEffect * 0.8);
      var alpha = 0.04 + finalIntensity * 0.28;
      var lineWidth = 0.25 + finalIntensity * 0.9;
      var rgb = mouseEffect > 0.15 ? HEX_CYAN_RGB : HEX_WHITE_RGB;
      var color = 'rgba(' + rgb + ', ' + alpha + ')';
      drawHexagon(hex.x, hex.y, HEX_RADIUS, color, lineWidth);
    });

    requestAnimationFrame(animate);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createHexGrid();
  }

  window.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });
  window.addEventListener('mouseleave', function () {
    mouse.x = undefined;
    mouse.y = undefined;
  });
  window.addEventListener('resize', resizeCanvas);

  resizeCanvas();
  animate();
})();
