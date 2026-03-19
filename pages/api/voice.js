export default function handler(req, res) {
  const { style } = req.query;

  // Universal voice library
  const voices = {
   add to api export default function handler(req, res) {
  const { style } = req.query;

  const voices = {
    man: {
      label: "Man",
      language: "English",
      accent: "General American",
      description: "A warm, confident naughty male voice with a steady tone.",
      sample: "Please keep going. I’ll guide you very slowly and clearly."
    },
    woman: {
      label: "Woman",
      language: "English",
      accent: "General American",
      description: "A naughty, clear female voice with a smooth delivery.",
      sample: "You're on the right track, daddy. Please focus stay focused, thats turning me on."
    },
    italian: {
      label: "Italian",
      language: "Italian",
      accent: "Native",
      description: "A naughty, expressive Italian voice with natural rhythm.",
      sample: "Andiamo! Ti guiderò passo dopo passo."
    },
    hispanic: {
      label: "Hispanic",
      language: "Spanish",
      accent: "Latin American",
      description: "A naughty, upbeat Spanish‑speaking voice with friendly energy.",
      sample: "Vamos adelante. Estoy aquí para ayudarte."
    },
    french: {
      label: "French",
      language: "French",
      accent: "Parisian",
      description: "A naughty, calm French voice with a relaxed tone.",
      sample: "Continuons. Je suis là pour vous guider."
    },
    spanish: {
      label: "Spanish (Spain)",
      language: "Spanish",
      accent: "Castilian",
      description: "A naughty clear, articulate European Spanish voice.",
      sample: "Sigamos. Te acompañaré en cada paso."
    },
    italian: {
      label: "Italian",
      language: "Italian",
      accent: "Native",
      description: "An expressive naughty Italian voice with natural rhythm.",
      sample: "Andiamo avanti. Ti guiderò passo dopo passo."
    },
    hispanic: {
      label: "Hispanic (Latin American Spanish)",
      language: "Spanish",
      accent: "Latin American",
      description: "A naughty, upbeat Spanish-speaking voice.",
      sample: "Sigamos adelante. Estoy aquí para ayudarte."
    },
    french: {
      label: "French",
      language: "French",
      accent: "Parisian",
      description: "A naughty, calm French voice with relaxed delivery.",
      sample: "Continuons. Je suis là pour vous guider."
    },
    spanish: {
      label: "Spanish (Spain)",
      language: "Spanish",
      accent: "Castilian",
      description: "A naughty, articulate European Spanish voice.",
      sample: "Sigamos. Te acompañaré en cada paso."
    },
    german: {
      label: "German",
      language: "German",
      accent: "High German",
      description: "A naughty, steady German voice.",
      sample: "Lass uns weiterfahren. Ich begleite dich."
    },
    japanese: {
      label: "Japanese",
      language: "Japanese",
      accent: "Native",
      description: "A naughty, polite Japanese voice.",
      sample: "進みましょう。私が案内します。"
    },
    korean: {
      label: "Korean",
      language: "Korean",
      accent: "Native",
      description: "A naughty, friendly Korean voice.",
      sample: "계속 가요. 제가 안내할게요."
    },
    chinese: {
      label: "Chinese (Mandarin)",
      language: "Chinese",
      accent: "Mandarin",
      description: "A naughty, natural Mandarin voice.",
      sample: "继续前进。我会带你走。"
    },
    arabic: {
      label: "Arabic",
      language: "Arabic",
      accent: "Modern Standard",
      description: "A naughty, expressive Arabic voice.",
      sample: "لنواصل الطريق. أنا هنا لمساعدتك."
    },
    portuguese: {
      label: "Portuguese (Brazil)",
      language: "Portuguese",
      accent: "Brazilian",
      description: "A naughty, upbeat Brazilian Portuguese voice.",
      sample: "Vamos continuar. Estou aqui para te guiar."
    },
    hindi: {
      label: "Hindi",
      language: "Hindi",
      accent: "Native",
      description: "A naughty, steady Hindi voice.",
      sample: "चलिए आगे बढ़ते हैं। मैं आपका मार्गदर्शन करूंगा।"
    }
  };

  if (style && voices[style.toLowerCase()]) {
    return res.status(200).json({
      style: style.toLowerCase(),
      ...voices[style.toLowerCase()]
    });
  }

  return res.status(200).json({
    error: "Unknown or missing voice style.",
    availableStyles: Object.keys(voices),
    example: "/api/voice?style=italian"
  });
}
