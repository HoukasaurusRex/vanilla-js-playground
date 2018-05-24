/* Get Our Elements */
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('[data-skip]');

/* Build Out Functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method](); // results in video.play() || video.pause()
  // if (video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
}
function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}
function skip() {
  console.info(video.currentTime);
  video.currentTime += parseFloat(this.dataset.skip); // selects 'skip' content from HTML dataset
  // parseFloat converts strings to numbers
}
function handleRangeUpdate() {
  video[this.name] = this.value;
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook Up the Event Listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
// Remember to add events to each element from querySelectorAll

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
// NOTE: Future feature: only trigger on mouse down

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', () => mousedown && scrub(e));
progress.addEventListener('mousedown', () => true);
progress.addEventListener('mouseup', () => false);

// NOTE: Add fullscreen function
