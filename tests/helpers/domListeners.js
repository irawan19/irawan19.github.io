/**
 * jsdom shares a single window/document across all tests in a file, so event
 * listeners registered by the code under test (e.g. main.js binds many
 * window "load"/"scroll" handlers) accumulate between tests and fire multiple
 * times. These helpers record listeners added to window/document while active
 * and remove them afterwards so each test starts clean.
 */
const TARGETS = () => [window, document];

let recorded = [];

function trackListeners() {
  recorded = [];
  TARGETS().forEach((target) => {
    if (target.__origAddEventListener) return;
    const orig = target.addEventListener.bind(target);
    target.__origAddEventListener = orig;
    target.addEventListener = function (type, fn, opts) {
      recorded.push({ target, type, fn, opts });
      return orig(type, fn, opts);
    };
  });
}

function cleanupListeners() {
  recorded.forEach(({ target, type, fn, opts }) => {
    target.removeEventListener(type, fn, opts);
  });
  recorded = [];
  TARGETS().forEach((target) => {
    if (target.__origAddEventListener) {
      target.addEventListener = target.__origAddEventListener;
      delete target.__origAddEventListener;
    }
  });
}

module.exports = { trackListeners, cleanupListeners };
