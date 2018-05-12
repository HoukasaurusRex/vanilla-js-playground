
/*
 * ============== Drumkit JS ==============
*/
function drumkitCSS() {
  const html = document.getElementsByTagName('html')[0];
  html.style.setProperty("--background", "url(/assets/backgrounds/drums.jpg)");
}
function drumkit(){
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
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

/*
 * ============== Clock JS ==============
*/
function clockCSS() {
  const html = document.getElementsByTagName('html')[0];
  html.style.setProperty("--background", "url(/assets/backgrounds/egg.jpg)");
}
function clock() {
  function setDate() {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');
    const allHands = document.querySelectorAll('.hand');
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    const hourDegrees = ((hours / 12) * 360) + 90;
    // Rotate arms by date && degrees
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    // Removes jumping arrow
    if(secondDegrees === 90) {
      allHands.forEach(hand => hand.style.transition = 'none')
    } else {
      allHands.forEach(hand => hand.style.transition = '')
    }
  }
  setInterval(setDate, 1000);
}

/*
 * ============== Dynamic Script Loading ==============
*/
window.onload = () => {
  switch (window.location.pathname) {
    case '/':
      break;
    case '/01-jsdrumkit':
      drumkitCSS();
      drumkit();
      break;
    case '/02-js-css-clock':
      clockCSS();
      clock();
      break;
  }
}
