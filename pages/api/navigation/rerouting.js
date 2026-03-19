// Off-route detection and rerouting hook

import { distanceMeters } from "./gps.js";

const OFF_ROUTE_THRESHOLD = 60; // meters

export function isOffRoute(position, route) {
  if (!route || !route.path || !route.path.length) return false;
  // naive: check distance to closest point on path
  let min = Infinity;
  for (const p of route.path) {
    const d = distanceMeters(position, { lat: p.lat, lng: p.lng });
    if (d < min) min = d;
  }
  return min > OFF_ROUTE_THRESHOLD;
}

// requestReroute should call your backend/provider and return a new route
export async function requestReroute(position, destination, fetchRouteFn) {
  return fetchRouteFn(position, destination);
}
