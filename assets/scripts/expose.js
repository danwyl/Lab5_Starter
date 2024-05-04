// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti;

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("[alt='No image selected']");
  const audioSelect = document.getElementsByClassName("hidden")[0];

  hornSelect.addEventListener("change", () => {
    hornImage.src = `assets/images/${hornSelect.value}.svg`;
    audioSelect.src = `assets/audio/${hornSelect.value}.mp3`;
  });

  const volumeSlider = document.getElementById("volume");
  const volumeImage = document.querySelector("[alt='Volume level 2']");
  volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value;
    if (volume == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
    audioSelect.volume = volume / 100;
  });

  const playButton = document.querySelector("button");
  playButton.addEventListener("click", () => {
    audioSelect.play();
    if (audioSelect.src.includes("party-horn.mp3")) {
      jsConfetti.addConfetti();
    }
  });
}