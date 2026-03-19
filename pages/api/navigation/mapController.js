// Map controller – expects you to pass in your map instance & helpers

let map = null;
let routeLayer = null;
let userMarker = null;
let followMode = true;

export function initMapController(mapInstance, { createPolyline, createMarker }) {
  map = mapInstance;
  routeLayer = null;
  userMarker = null;
  // createPolyline: (coordsArray) => layer
  // createMarker: (latLng) => marker
}

export function drawRoute(coords) {
  if (!map) return;
  if (routeLayer) {
    routeLayer.remove();
  }
  routeLayer = window.L.polyline(coords, { color: "#ff3366", weight: 5 }).addTo(map);
  map.fitBounds(routeLayer.getBounds(), { padding: [40, 40] });
}

export function updateUserPosition(latLng) {
  if (!map) return;
  if (!userMarker) {
    userMarker = window.L.marker(latLng).addTo(map);
  } else {
    userMarker.setLatLng(latLng);
  }
  if (followMode) {
    map.setView(latLng, map.getZoom() || 16);
  }
}

export function setFollowMode(enabled) {
  followMode = enabled;
}
