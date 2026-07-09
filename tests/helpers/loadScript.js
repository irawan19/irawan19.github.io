/**
 * Test helper for loading the site's browser-oriented scripts.
 *
 * The first-party modules under assets/js are plain <script> files: they either
 * declare globals (portfolio-data.js) or run as IIFEs with side effects
 * (main.js, portfolio-details.js, hexagon-bg.js). None of them use module
 * exports, so this helper reads the source and executes it against the current
 * jsdom global scope, optionally re-exposing selected top-level bindings on
 * globalThis so other scripts (and the tests) can reach them.
 */
const fs = require('fs');
const path = require('path');
const { createInstrumenter } = require('istanbul-lib-instrument');

const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

// Istanbul instrumenter so that scripts executed via this helper contribute to
// Jest's coverage report (Jest's babel coverage provider reads global.__coverage__).
const instrumenter = createInstrumenter({
  esModules: false,
  coverageVariable: '__coverage__',
  compact: false,
  preserveComments: true,
});

function readScript(relativePath) {
  return fs.readFileSync(path.join(PROJECT_ROOT, relativePath), 'utf8');
}

/**
 * Execute a script file in the global scope.
 *
 * The source is instrumented with Istanbul first so that running it records
 * line/branch/function coverage, then executed against the current jsdom
 * globals. Selected top-level bindings can be re-exposed on globalThis.
 *
 * @param {string} relativePath path relative to the repo root, e.g. "assets/js/main.js"
 * @param {string[]} exposeNames top-level binding names to copy onto globalThis after execution
 */
function loadScript(relativePath, exposeNames = []) {
  const filename = path.join(PROJECT_ROOT, relativePath);
  const code = fs.readFileSync(filename, 'utf8');
  const instrumented = instrumenter.instrumentSync(code, filename);
  const suffix = exposeNames
    .map((name) => `try { globalThis[${JSON.stringify(name)}] = ${name}; } catch (e) {}`)
    .join('\n');
  // eslint-disable-next-line no-new-func
  const fn = new Function(`${instrumented}\n;${suffix}`);
  fn.call(globalThis);
}

module.exports = { loadScript, readScript, PROJECT_ROOT };
