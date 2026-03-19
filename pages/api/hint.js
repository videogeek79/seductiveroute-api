export default function handler(req, res) {
  const hints = [
    "Eyes on the road. Hands… wherever you want them.",
    "Stay sharp. I like a driver who’s in control.",
    "Slow down… or don’t. I won’t tell you what to do.",
    "Focus up. I’m watching you more than the road.",
    "Keep going. I like where this is headed.",
    "You drive. I’ll handle the temptation.",
    "Steady now… confidence looks good on you.",
    "You’re doing great. Don’t let me distract you… too much."
  ];

  const randomHint = hints[Math.floor(Math.random() * hints.length)];

  return res.status(200).json({
    hint: randomHint
  });
}
