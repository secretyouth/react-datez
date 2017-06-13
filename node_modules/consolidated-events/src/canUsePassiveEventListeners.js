import canUseDOM from './canUseDOM';

// Adapted from Modernizr
// https://github.com/Modernizr/Modernizr/blob/5eea7e2a/feature-detects/dom/passiveeventlisteners.js#L26-L35
function testPassiveEventListeners() {
  if (!canUseDOM) {
    return false;
  }

  let supportsPassiveOption = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        supportsPassiveOption = true;
      },
    });
    window.addEventListener('test', null, opts);
  } catch (e) {
    // do nothing
  }

  return supportsPassiveOption;
}

let memoized;

export default function canUsePassiveEventListeners() {
  if (memoized === undefined) {
    memoized = testPassiveEventListeners();
  }
  return memoized;
}
