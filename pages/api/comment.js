export default function handler(req, res) {
  const { name } = req.query;
  res.status(200).json({
    comment: `Stay focused, ${name}. Naughty Navigator's got you on this route.`
  });
}
