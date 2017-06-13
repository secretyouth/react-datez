import TargetEventHandlers from '../src/TargetEventHandlers';

class MockTarget {
  constructor() {
    this.addEventListener = jest.fn();
    this.removeEventListener = jest.fn();
  }
}

describe('#add()', () => {
  it('returns a handle', () => {
    const target = new MockTarget();
    const eventHandlers = new TargetEventHandlers(target);
    const handle = eventHandlers.add('scroll', () => {});

    expect(handle).not.toBe(null);
    expect(handle).not.toBe(undefined);
  });

  it('adds a single event listener to the target the first time', () => {
    const target = new MockTarget();
    const eventHandlers = new TargetEventHandlers(target);
    const listener = () => {};
    eventHandlers.add('scroll', listener);

    expect(target.addEventListener).toHaveBeenCalledTimes(1);
    expect(target.addEventListener)
      .toHaveBeenCalledWith('scroll', jasmine.any(Function), undefined);
  });

  it('does not add an event listener to the target the second time', () => {
    const target = new MockTarget();
    const eventHandlers = new TargetEventHandlers(target);
    const listener = () => {};
    const listener2 = () => {};
    eventHandlers.add('scroll', listener);
    eventHandlers.add('scroll', listener2);

    expect(target.addEventListener).toHaveBeenCalledTimes(1);
    expect(target.addEventListener)
      .toHaveBeenCalledWith('scroll', jasmine.any(Function), undefined);
  });

  it('adds an event listener for each set of options', () => {
    const target = new MockTarget();
    const eventHandlers = new TargetEventHandlers(target);
    const listener = () => {};
    const listener2 = () => {};
    eventHandlers.add('scroll', listener);
    eventHandlers.add('scroll', listener2, { passive: true });

    expect(target.addEventListener).toHaveBeenCalledTimes(2);
    expect(target.addEventListener)
      .toHaveBeenCalledWith('scroll', jasmine.any(Function), undefined);
    expect(target.addEventListener)
      .toHaveBeenCalledWith('scroll', jasmine.any(Function), { passive: true });
  });

  it('adds an event listener for each event type', () => {
    const target = new MockTarget();
    const eventHandlers = new TargetEventHandlers(target);
    const listener = () => {};
    const listener2 = () => {};
    eventHandlers.add('scroll', listener);
    eventHandlers.add('resize', listener2);

    expect(target.addEventListener).toHaveBeenCalledTimes(2);
    expect(target.addEventListener)
      .toHaveBeenCalledWith('scroll', jasmine.any(Function), undefined);
    expect(target.addEventListener)
      .toHaveBeenCalledWith('resize', jasmine.any(Function), undefined);
  });
});

describe('#delete()', () => {
  it('deletes the event listener when the only handler is removed', () => {
    const target = new MockTarget();
    const eventHandlers = new TargetEventHandlers(target);
    const handle = eventHandlers.add('scroll', () => {});
    eventHandlers.delete(handle);

    expect(target.removeEventListener).toHaveBeenCalledTimes(1);
    expect(target.removeEventListener)
      .toHaveBeenCalledWith('scroll', jasmine.any(Function), undefined);
  });

  it('does not delete the listener when removing an unknown handler', () => {
    const target = new MockTarget();
    const eventHandlers = new TargetEventHandlers(target);
    eventHandlers.add('scroll', () => {});
    eventHandlers.delete({ target: 'foo' });

    expect(target.removeEventListener).toHaveBeenCalledTimes(0);
  });

  it('does not delete the event listener when there are more handlers left', () => {
    const target = new MockTarget();
    const eventHandlers = new TargetEventHandlers(target);
    const handle = eventHandlers.add('scroll', () => {});
    eventHandlers.add('scroll', () => {});
    eventHandlers.delete(handle);

    expect(target.removeEventListener).toHaveBeenCalledTimes(0);
  });

  it('deletes the event listener when all handlers is removed', () => {
    const target = new MockTarget();
    const eventHandlers = new TargetEventHandlers(target);
    const handle = eventHandlers.add('scroll', () => {});
    const handle2 = eventHandlers.add('scroll', () => {});
    eventHandlers.delete(handle);
    eventHandlers.delete(handle2);

    expect(target.removeEventListener).toHaveBeenCalledTimes(1);
    expect(target.removeEventListener)
      .toHaveBeenCalledWith('scroll', jasmine.any(Function), undefined);
  });

  it('handles different options separately', () => {
    const target = new MockTarget();
    const eventHandlers = new TargetEventHandlers(target);
    const handle = eventHandlers.add('scroll', () => {});
    const handle2 = eventHandlers.add('scroll', () => {}, { passive: true });
    eventHandlers.delete(handle);
    eventHandlers.delete(handle2);

    expect(target.removeEventListener).toHaveBeenCalledTimes(2);
    expect(target.removeEventListener)
      .toHaveBeenCalledWith('scroll', jasmine.any(Function), undefined);
    expect(target.removeEventListener)
      .toHaveBeenCalledWith('scroll', jasmine.any(Function), { passive: true });
  });
});

describe('#handleEvent', () => {
  it('calls each handler', () => {
    const target = new MockTarget();
    const eventHandlers = new TargetEventHandlers(target);
    const handlers = [jest.fn(), jest.fn(), jest.fn()];
    handlers.forEach((handler) => {
      eventHandlers.add('scroll', handler);
    });
    const event = {};
    eventHandlers.handleEvent('scroll', undefined, event);

    handlers.forEach((handler) => {
      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(event);
    });
  });

  it('calls each handler with options', () => {
    const target = new MockTarget();
    const eventHandlers = new TargetEventHandlers(target);
    const handlers = [jest.fn(), jest.fn(), jest.fn()];
    handlers.forEach((handler) => {
      eventHandlers.add('scroll', handler, { passive: true });
    });
    const event = {};
    eventHandlers.handleEvent('scroll', { passive: true }, event);

    handlers.forEach((handler) => {
      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(event);
    });
  });
});
