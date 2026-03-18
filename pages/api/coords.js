export default function handler(req, res) {
  // For now, return a fixed sample location
  res.status(200).json({
    lat: 41.6021,
    lng: -87.6070,
  });
}
