import {
  home,
  drumkit,
  clock,
  cssvariables,
  arrayCardio,
  arrayCardioTwo,
  arrayCopyMethods,
  flexpanels,
  typeAhead,
  canvas,
  consoleCommander,
  multiCheck,
  videoPlayer,
  slideOnScroll,
  localStorageTapas,
  sortBands,
  speechDetection,
  speedometer,
  magicMovingHighlight,
  textToSpeech,
  countdownTimer,
  whackAMole,
 } from './vanilla.js';

/*
 * ============== Dynamic Script Loading ==============
*/
window.onload = () => {
  switch (window.location.pathname) {
    case '/':
      home();
      break;
    case '/01-drumkit':
      drumkit();
      break;
    case '/02-clock':
      clock();
      break;
    case '/03-cssvariables':
      cssvariables();
      break;
    case '/04-arraycardio':
      arrayCardio();
      arrayCardioTwo();
      arrayCopyMethods();
      break;
    case '/05-flexpanels':
      flexpanels();
    case '/06-typeahead':
      typeAhead();
      break;
    case '/07-canvas':
      canvas();
      break;
    case '/08-consolecommander':
      consoleCommander();
      break;
    case '/09-multicheck':
      multiCheck();
      break;
    case '/10-videoplayer':
      videoPlayer();
      break;
    case '/11-slideonscroll':
      slideOnScroll();
      break;
    case '/12-localstoragetapas':
      localStorageTapas();
      break;
    case '/13-sortbands':
      sortBands();
      break;
    case '/14-webcam':
      window.photobooth = webcam();
      break;
    case '/15-speechdetection':
      speechDetection();
      break;
    case '/16-speedometer':
      speedometer();
      break;
    case '/17-magic-moving-highlight':
      magicMovingHighlight();
      break;
    case '/18-texttospeech':
      textToSpeech();
      break;
    case '/19-countdowntimer':
      countdownTimer();
      break;
    case '/20-whackamole':
      whackAMole();
      break;
    default:
      break;
  }
}
