// Simple voice engine using Web Speech API (or your own TTS)

let currentUtterance = null;
let currentVoiceStyle = "default";

export function setVoiceStyle(style) {
  currentVoiceStyle = style;
}

export function speak(text) {
  if (!window.speechSynthesis) {
    console.warn("Speech synthesis not available");
    return;
  }
  stopSpeaking();
  const utter = new SpeechSynthesisUtterance(text);
  // You can map currentVoiceStyle to a specific voice here if you want
  currentUtterance = utter;
  window.speechSynthesis.speak(utter);
}

export function stopSpeaking() {
  if (window.speechSynthesis && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
  currentUtterance = null;
}
