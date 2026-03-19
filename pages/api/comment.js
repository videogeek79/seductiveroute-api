export default function handler(req, res) {
  const { name } = req.query;

  // If a name is provided, personalize the message
  if (name) {
    return res.status(200).json({
      comment: `Stay focused, ${name}. Naughty Navigator's got you on this route.`
    });
  }

  // Default fallback message
  return res.status(200).json({
    comment: "Stay focused. Naughty Navigator's got you on this route."
  });
}
