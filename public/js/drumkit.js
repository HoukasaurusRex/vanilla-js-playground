/*
 * Drumkit JS
*/

// Attach event listener to play audio and add css class on keydown
window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop function altogether
  audio.currentTime = 0; // rewind to start
  audio.play();
  key.classList.add('playing');
});

// Function to remove css class
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip property if not transform
  this.classList.remove('playing');
}

// Grab keys array from HTML, listen for css transitions, and call removeTransition function
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
