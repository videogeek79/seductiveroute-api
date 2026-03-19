export default function handler(req, res) {
  const { city } = req.query;

  // Simple lookup table for demo purposes
  const locations = {
    Chicago: { lat: 41.8781, lng: -87.6298 },
    Dolton: { lat: 41.6021, lng: -87.6070 },
    NewYork: { lat: 40.7128, lng: -74.0060 },
    LA: { lat: 34.0522, lng: -118.2437 },
  };

  // If city exists in our table, return it
  if (city && locations[city]) {
    return res.status(200).json(locations[city]);
  }

  // Default fallback
  return res.status(200).json({
    lat: 41.6021,
    lng: -87.6070,
    note: "Default location returned because no valid city was provided."
  });
}
