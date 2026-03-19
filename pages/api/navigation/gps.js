// GPS watcher and distance helpers

let watchId = null;
let onUpdateCallback = null;

export function startGPSWatcher(onUpdate) {
  onUpdateCallback = onUpdate;
  if (!navigator.geolocation) {
    console.warn("Geolocation not supported");
    return;
  }
  watchId = navigator.geolocation.watchPosition(
    pos => {
      const { latitude, longitude } = pos.coords;
      onUpdateCallback?.({ lat: latitude, lng: longitude });
    },
    err => console.warn("GPS error", err),
    { enableHighAccuracy: true, maximumAge: 1000, timeout: 10000 }
  );
}

export function stopGPSWatcher() {
  if (watchId !== null && navigator.geolocation) {
    navigator.geolocation.clearWatch(watchId);
  }
  watchId = null;
  onUpdateCallback = null;
}

// Haversine distance in meters
export function distanceMeters(a, b) {
  const R = 6371000;
  const toRad = d => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
  return R * c;
}
