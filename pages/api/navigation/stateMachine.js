// Simple navigation state machine

export const NAV_STATES = {
  IDLE: "idle",
  PREVIEW: "preview",
  NAVIGATING: "navigating",
  REROUTING: "rerouting",
  ARRIVED: "arrived"
};

let currentState = NAV_STATES.IDLE;
const listeners = new Set();

export function setState(next) {
  if (next === currentState) return;
  const prev = currentState;
  currentState = next;
  listeners.forEach(fn => fn({ prev, next }));
}

export function getState() {
  return currentState;
}

export function onStateChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
