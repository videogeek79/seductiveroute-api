// Instruction logic based on distance to next step

import { distanceMeters } from "./gps.js";

const THRESHOLDS = {
  EARLY: 150,   // meters
  PREPARE: 60,
  NOW: 20
};

export function getCurrentStep(route, index) {
  if (!route || !route.steps || !route.steps[index]) return null;
  return route.steps[index];
}

export function distanceToStep(position, step) {
  if (!position || !step) return Infinity;
  const target = { lat: step.lat, lng: step.lng };
  return distanceMeters(position, target);
}

export function classifyDistance(distance) {
  if (distance <= THRESHOLDS.NOW) return "now";
  if (distance <= THRESHOLDS.PREPARE) return "prepare";
  if (distance <= THRESHOLDS.EARLY) return "early";
  return "far";
}

export function buildInstructionText(step, phase) {
  if (!step) return null;
  const { maneuver, distance } = step; // you can adapt to your route format

  const prettyDistance =
    distance > 1000
      ? `${(distance / 1000).toFixed(1)} km`
      : `${Math.round(distance)} meters`;

  if (phase === "early") {
    return `In ${prettyDistance}, ${maneuver}`;
  }
  if (phase === "prepare") {
    return `Get ready to ${maneuver}`;
  }
  if (phase === "now") {
    return `Now, ${maneuver}`;
  }
  return null;
}
