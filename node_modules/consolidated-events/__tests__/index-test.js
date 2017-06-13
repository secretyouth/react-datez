/* eslint-disable import/first */
import { addEventListener, removeEventListener, EVENT_HANDLERS_KEY } from '../src';
import TargetEventHandlers from '../src/TargetEventHandlers';

class MockTarget {
  constructor() {
    this.addEventListener = jest.fn();
    this.removeEventListener = jest.fn();
  }
}

describe('addEventListener()', () => {
  it('initializes an instance of TargetEventHandlers on new targets', () => {
    const target = new MockTarget();
    addEventListener(target, 'scroll', () => {});
    expect(target[EVENT_HANDLERS_KEY]).toBeInstanceOf(TargetEventHandlers);
    expect(target[EVENT_HANDLERS_KEY].target).toBe(target);
  });

  it('normalizes event options', () => {
    const target = new MockTarget();
    addEventListener(target, 'scroll', () => {}, { capture: true });

    expect(target.addEventListener)
      .toHaveBeenCalledWith('scroll', jasmine.any(Function), true);
  });

  it('returns a handle', () => {
    const target = new MockTarget();
    const handle = addEventListener(target, 'scroll', () => {}, { capture: true });

    expect(handle).not.toBe(null);
    expect(handle).not.toBe(undefined);
  });
});

describe('removeEventListener()', () => {
  it('does not throw when target is undefined', () => {
    const handle = { target: undefined };
    expect(() => removeEventListener(handle)).not.toThrow();
  });

  it('removes event listeners that were previously registered', () => {
    const target = new MockTarget();
    const handle = addEventListener(target, 'scroll', () => {});
    removeEventListener(handle);

    expect(target.removeEventListener)
      .toHaveBeenCalledWith('scroll', jasmine.any(Function), undefined);
  });

  it('ignores event listeners it does not know about', () => {
    const target = new MockTarget();
    addEventListener(target, 'scroll', () => {});
    removeEventListener({ target, eventName: 'scroll', index: 'foo' });
    removeEventListener({ target, eventName: 'resize', index: 'foo' });

    expect(target.removeEventListener).toHaveBeenCalledTimes(0);
  });

  it('normalizes event options', () => {
    const target = new MockTarget();
    const handle = addEventListener(target, 'scroll', () => {}, { capture: true });
    removeEventListener(handle);

    expect(target.removeEventListener)
      .toHaveBeenCalledWith('scroll', jasmine.any(Function), true);
  });
});
