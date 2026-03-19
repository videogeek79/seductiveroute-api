export default function handler(req, res) {
  const { style } = req.query;

  // Universal voice library
  const voices = {
    man: {
      label: "Man",
      language: "English",
      accent: "General American",
      description: "A warm, confident male voice with natural pacing.",
      sample: "Let's keep going. I’ll guide you clearly and calmly."
    },
    woman: {
      label: "Woman",
      language: "English",
      accent: "General American",
      description: "A friendly, clear female voice with a smooth tone.",
      sample: "You're on the right track. I’m here to help you stay focused."
    },
    italian: {
      label: "Italian",
      language: "Italian",
      accent: "Native",
      description: "An expressive Italian voice with natural rhythm.",
      sample: "Andiamo avanti. Ti guiderò passo dopo passo."
    },
    hispanic: {
      label: "Hispanic (Latin American Spanish)",
      language: "Spanish",
      accent: "Latin American",
      description: "A warm, upbeat Spanish-speaking voice.",
      sample: "Sigamos adelante. Estoy aquí para ayudarte."
    },
    french: {
      label: "French",
      language: "French",
      accent: "Parisian",
      description: "A smooth, calm French voice with relaxed delivery.",
      sample: "Continuons. Je suis là pour vous guider."
    },
    spanish: {
      label: "Spanish (Spain)",
      language: "Spanish",
      accent: "Castilian",
      description: "A clear, articulate European Spanish voice.",
      sample: "Sigamos. Te acompañaré en cada paso."
    },
    german: {
      label: "German",
      language: "German",
      accent: "High German",
      description: "A precise, steady German voice.",
      sample: "Lass uns weiterfahren. Ich begleite dich."
    },
    japanese: {
      label: "Japanese",
      language: "Japanese",
      accent: "Native",
      description: "A calm, polite Japanese voice.",
      sample: "進みましょう。私が案内します。"
    },
    korean: {
      label: "Korean",
      language: "Korean",
      accent: "Native",
      description: "A clear, friendly Korean voice.",
      sample: "계속 가요. 제가 안내할게요."
    },
    chinese: {
      label: "Chinese (Mandarin)",
      language: "Chinese",
      accent: "Mandarin",
      description: "A smooth, natural Mandarin voice.",
      sample: "继续前进。我会带你走。"
    },
    arabic: {
      label: "Arabic",
      language: "Arabic",
      accent: "Modern Standard",
      description: "A warm, expressive Arabic voice.",
      sample: "لنواصل الطريق. أنا هنا لمساعدتك."
    },
    portuguese: {
      label: "Portuguese (Brazil)",
      language: "Portuguese",
      accent: "Brazilian",
      description: "A friendly, upbeat Brazilian Portuguese voice.",
      sample: "Vamos continuar. Estou aqui para te guiar."
    },
    hindi: {
      label: "Hindi",
      language: "Hindi",
      accent: "Native",
      description: "A warm, steady Hindi voice.",
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
