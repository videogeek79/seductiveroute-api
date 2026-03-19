// Arrival detection

import { distanceMeters } from "./gps.js";

const ARRIVAL_RADIUS = 25; // meters

export function hasArrived(position, destination) {
  if (!position || !destination) return false;
  const d = distanceMeters(position, destination);
  return d <= ARRIVAL_RADIUS;
}
