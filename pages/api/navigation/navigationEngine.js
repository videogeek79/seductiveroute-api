// Master controller tying everything together

import { startGPSWatcher, stopGPSWatcher } from "./gps.js";
import { NAV_STATES, setState, getState } from "./stateMachine.js";
import { getCurrentStep, distanceToStep, classifyDistance, buildInstructionText } from "./instructions.js";
import { speak, stopSpeaking } from "./voiceEngine.js";
import { isOffRoute, requestReroute } from "./rerouting.js";
import { hasArrived } from "./arrival.js";
import { drawRoute, updateUserPosition } from "./mapController.js";

let activeRoute = null;
let currentStepIndex = 0;
let destination = null;
let fetchRouteFn = null; // you inject this
let lastPhaseForStep = null;

export function initNavigationEngine({ fetchRoute }) {
  fetchRouteFn = fetchRoute;
}

export function loadRoute(routeData) {
  activeRoute = routeData;
  currentStepIndex = 0;
  lastPhaseForStep = null;
  if (routeData && routeData.path) {
    drawRoute(routeData.path.map(p => [p.lat, p.lng]));
  }
  setState(NAV_STATES.PREVIEW);
}

export function startNavigation(dest) {
  if (!activeRoute) return;
  destination = dest;
  setState(NAV_STATES.NAVIGATING);
  startGPSWatcher(onGPSUpdate);
}

export function stopNavigation() {
  stopGPSWatcher();
  stopSpeaking();
  activeRoute = null;
  destination = null;
  currentStepIndex = 0;
  lastPhaseForStep = null;
  setState(NAV_STATES.IDLE);
}

async function onGPSUpdate(position) {
  updateUserPosition(position);

  const state = getState();
  if (state !== NAV_STATES.NAVIGATING && state !== NAV_STATES.REROUTING) return;

  if (destination && hasArrived(position, destination)) {
    speak("You have arrived at your destination.");
    setState(NAV_STATES.ARRIVED);
    stopNavigation();
    return;
  }

  if (activeRoute && isOffRoute(position, activeRoute)) {
    setState(NAV_STATES.REROUTING);
    speak("Recalculating route.");
    activeRoute = await requestReroute(position, destination, fetchRouteFn);
    loadRoute(activeRoute);
    setState(NAV_STATES.NAVIGATING);
    return;
  }

  handleStepProgress(position);
}

function handleStepProgress(position) {
  const step = getCurrentStep(activeRoute, currentStepIndex);
  if (!step) return;

  const dist = distanceToStep(position, step);
  const phase = classifyDistance(dist);

  if (phase !== lastPhaseForStep) {
    const text = buildInstructionText(step, phase);
    if (text) {
      speak(text);
    }
    lastPhaseForStep = phase;
  }

  // advance to next step when very close
  if (phase === "now") {
    currentStepIndex += 1;
    lastPhaseForStep = null;
  }
}
