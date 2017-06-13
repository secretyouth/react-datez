import normalizeEventOptions from './normalizeEventOptions';
import TargetEventHandlers from './TargetEventHandlers';

// Export to make testing possible.
export const EVENT_HANDLERS_KEY = '__consolidated_events_handlers__';

export function addEventListener(target, eventName, listener, options) {
  if (!target[EVENT_HANDLERS_KEY]) {
    // eslint-disable-next-line no-param-reassign
    target[EVENT_HANDLERS_KEY] = new TargetEventHandlers(target);
  }
  const normalizedEventOptions = normalizeEventOptions(options);
  return target[EVENT_HANDLERS_KEY].add(eventName, listener, normalizedEventOptions);
}

export function removeEventListener(eventHandle) {
  const { target } = eventHandle;

  // There can be a race condition where the target may no longer exist when
  // this function is called, e.g. when a React component is unmounting.
  // Guarding against this prevents the following error:
  //
  //   Cannot read property 'removeEventListener' of undefined
  if (target) {
    target[EVENT_HANDLERS_KEY].delete(eventHandle);
  }
}
