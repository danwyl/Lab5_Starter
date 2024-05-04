// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
function init() {
  let voices = [];
  const voiceSelect = document.getElementById("voice-select");
  synth.addEventListener("voiceschanged", () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  });

  const speakButton = document.querySelector("button");
  const textToSpeak = document.getElementById("text-to-speak");
  const imgSrc = document.querySelector("[alt='Smiling face']");

  speakButton.addEventListener("click", (event) => {
    const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        synth.speak(utterThis);
      }
    }
    utterThis.onstart = () => { 
      imgSrc.src = "assets/images/smiling-open.png";
    }
    utterThis.onend = () => {
      imgSrc.src = "assets/images/smiling.png";
    }
  });
  
}

