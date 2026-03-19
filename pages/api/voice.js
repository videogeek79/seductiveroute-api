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
      code: "en",
      accent: "General American",
      description: "A naughty, confident naughty male voice with a steady tone.",
      sample: "Please keep going. I’ll guide you very slowly and clearly."
    },
    woman: {
      label: "Woman",
      language: "English",
      code: "en",
      accent: "General American",
      description: "A naughty, clear female voice with a smooth delivery.",
      sample: "You're on the right track, daddy. Please focus stay focused, thats turning me on."
    },
    italian: {
      label: "Italian",
      language: "Italian",
      code: "it",
      accent: "Native",
      description: "A naughty, expressive Italian voice with natural rhythm.",
      sample: "Andiamo! Ti guiderò passo dopo passo."
    },
    hispanic: {
      label: "Hispanic",
      language: "Spanish",
      code: "es",
      accent: "Latin American",
      description: "A naughty, upbeat Spanish‑speaking voice with friendly energy.",
      sample: "Vamos adelante. Estoy aquí para ayudarte."
    },
    french: {
      label: "French",
      language: "French",
      code: "fr",
      accent: "Parisian",
      description: "A naughty, calm French voice with a relaxed tone.",
      sample: "Continuons. Je suis là pour vous guider."
    },
    spanish: {
      label: "Spanish (Spain)",
      language: "Spanish",
      code: "es",
      accent: "Castilian",
      description: "A naughty clear, articulate European Spanish voice.",
      sample: "Sigamos. Te acompañaré en cada paso."
    },
    italian: {
      label: "Italian",
      language: "Italian",
      code: "it",
      accent: "Native",
      description: "An expressive naughty Italian voice with natural rhythm.",
      sample: "Andiamo avanti. Ti guiderò passo dopo passo."
    },
    hispanic: {
      label: "Hispanic (Latin American Spanish)",
      language: "Spanish",
      code: "es",
      accent: "Latin American",
      description: "A naughty, upbeat Spanish-speaking voice.",
      sample: "Sigamos adelante. Estoy aquí para ayudarte."
    },
    french: {
      label: "French",
      language: "French",
      code: "fr",
      accent: "Parisian",
      description: "A naughty, calm French voice with relaxed delivery.",
      sample: "Continuons. Je suis là pour vous guider."
    },
    spanish: {
      label: "Spanish (Spain)",
      language: "Spanish",
      code: "es",
      accent: "Castilian",
      description: "A naughty, articulate European Spanish voice.",
      sample: "Sigamos. Te acompañaré en cada paso."
    },
    german: {
      label: "German",
      language: "German",
      code: "de",
      accent: "High German",
      description: "A naughty, steady German voice.",
      sample: "Lass uns weiterfahren. Ich begleite dich."
    },
    japanese: {
      label: "Japanese",
      language: "Japanese",
      code: "ja",
      accent: "Native",
      description: "A naughty, polite Japanese voice.",
      sample: "進みましょう。私が案内します。"
    },
    korean: {
      label: "Korean",
      language: "Korean",
      code: "ko",
      accent: "Native",
      description: "A naughty, friendly Korean voice.",
      sample: "계속 가요. 제가 안내할게요."
    },
    chinese: {
      label: "Chinese (Mandarin)",
      language: "Chinese",
      code: "zh",
      accent: "Mandarin",
      description: "A naughty, natural Mandarin voice.",
      sample: "继续前进。我会带你走。"
    },
    arabic: {
      label: "Arabic",
      language: "Arabic",
      code: "ar",
      accent: "Modern Standard",
      description: "A naughty, expressive Arabic voice.",
      sample: "لنواصل الطريق. أنا هنا لمساعدتك."
    },
    portuguese: {
      label: "Portuguese (Brazil)",
      language: "Portuguese",
      code: "pt",
      accent: "Brazilian",
      description: "A naughty, upbeat Brazilian Portuguese voice.",
      sample: "Vamos continuar. Estou aqui para te guiar."
    },
    hindi: {
      label: "Hindi",
      language: "Hindi",
       code: "hi",
      accent: "Native",
      description: "A naughty, steady Hindi voice.",
      sample: "चलिए आगे बढ़ते हैं। मैं आपका मार्गदर्शन करूंगा।"
    }
    dutch: {
      label: "Dutch",
      language: "Dutch",
      code: "nl",
      accent: "Netherlands",
      description: "A naughty, steady Dutch voice.",
      sample: "Laten we doorgaan. Ik help je onderweg."
    },
    swedish: {
      label: "Swedish",
      language: "Swedish",
      code: "sv",
      accent: "Stockholm",
      description: "A naughty, smooth Swedish voice.",
      sample: "Vi fortsätter. Jag guidar dig vidare."
    },
    norwegian: {
      label: "Norwegian",
      language: "Norwegian",
      code: "no",
      accent: "Bokmål",
      description: "A naughty, natural Norwegian voice.",
      sample: "La oss fortsette. Jeg viser vei."
    },
    danish: {
      label: "Danish",
      language: "Danish",
      code: "da",
      accent: "Copenhagen",
      description: "A naughty, warm Danish voice.",
      sample: "Lad os fortsætte. Jeg guider dig."
    },
    finnish: {
      label: "Finnish",
      language: "Finnish",
      code: "fi",
      accent: "Native",
      description: "A naughty, steady Finnish voice.",
      sample: "Jatketaan matkaa. Minä opastan sinua."
    },
    polish: {
      label: "Polish",
      language: "Polish",
      code: "pl",
      accent: "Native",
      description: "A naughty, articulate Polish voice.",
      sample: "Jedźmy dalej. Poprowadzę cię."
    },
    russian: {
      label: "Russian",
      language: "Russian",
      code: "ru",
      accent: "Moscow",
      description: "A naughty, confident Russian voice.",
      sample: "Продолжаем движение. Я покажу путь."
    },
    ukrainian: {
      label: "Ukrainian",
      language: "Ukrainian",
      code: "uk",
      accent: "Kyiv",
      description: "A naughty, friendly Ukrainian voice.",
      sample: "Продовжуємо шлях. Я проведу тебе."
    },
    turkish: {
      label: "Turkish",
      language: "Turkish",
      code: "tr",
      accent: "Istanbul",
      description: "A naughty, expressive Turkish voice.",
      sample: "Devam edelim. Sana yol göstereceğim."
    },
    hebrew: {
      label: "Hebrew",
      language: "Hebrew",
      code: "he",
      accent: "Native",
      description: "A naughty, steady Hebrew voice.",
      sample: "בוא נמשיך. אני אדריך אותך."
    },
    farsi: {
      label: "Persian (Farsi)",
      language: "Persian",
      code: "fa",
      accent: "Tehran",
      description: "A naughty, expressive Persian voice.",
      sample: "ادامه بده. من راه را نشانت می‌دهم."
    },
    thai: {
      label: "Thai",
      language: "Thai",
      code: "th",
      accent: "Bangkok",
      description: "A naughty, upbeat Thai voice.",
      sample: "ไปต่อกันเถอะ ฉันจะนำทางให้คุณ."
    },
    vietnamese: {
      label: "Vietnamese",
      language: "Vietnamese",
      code: "vi",
      accent: "Hanoi",
      description: "A naughty, natural Vietnamese voice.",
      sample: "Hãy tiếp tục. Tôi sẽ hướng dẫn bạn."
    },
    filipino: {
      label: "Filipino (Tagalog)",
      language: "Filipino",
      code: "tl",
      accent: "Manila",
      description: "A naughty, friendly Filipino voice.",
      sample: "Tuloy lang tayo. Ako ang gagabay sa'yo."
    },
    indonesian: {
      label: "Indonesian",
      language: "Indonesian",
      code: "id",
      accent: "Jakarta",
      description: "A naughty, relaxed Indonesian voice.",
      sample: "Ayo lanjutkan. Aku akan memandu kamu."
    },
    swahili: {
      label: "Swahili",
      language: "Swahili",
      code: "sw",
      accent: "East African",
      description: "A naughty, expressive Swahili voice.",
      sample: "Twendeni. Niko hapa kukuongoza."
    },
    yoruba: {
      label: "Yoruba",
      language: "Yoruba",
      code: "yo",
      accent: "Native",
      description: "A naughty, rhythmic Yoruba voice.",
      sample: "Ẹ jẹ́ ká lọ. Emi ni yóò tọ́ ọ lọ."
    },
    zulu: {
      label: "Zulu",
      language: "Zulu",
      code: "zu",
      accent: "Native",
      description: "A naughty, grounded Zulu voice.",
      sample: "Asiqhubeke. Ngizokukhombisa indlela."
    },
    greek: {
      label: "Greek",
      language: "Greek",
      code: "el",
      accent: "Athens",
      description: "A naughty, expressive Greek voice.",
      sample: "Ας συνεχίσουμε. Θα σε καθοδηγήσω."
    },
    romanian: {
      label: "Romanian",
      language: "Romanian",
      code: "ro",
      accent: "Native",
      description: "A naughty, steady Romanian voice.",
      sample: "Să continuăm. Te voi ghida."
    },
    czech: {
      label: "Czech",
      language: "Czech",
      code: "cs",
      accent: "Prague",
      description: "A naughty, calm Czech voice.",
      sample: "Pokračujme. Provedu tě."
    },
    hungarian: {
      label: "Hungarian",
      language: "Hungarian",
      code: "hu",
      accent: "Native",
      description: "A naughty, steady Hungarian voice.",
      sample: "Folytassuk. Én vezetlek tovább."
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
