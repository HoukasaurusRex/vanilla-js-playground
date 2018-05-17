function homeCSS() {
  const html = document.getElementsByTagName('html')[0];
  html.style.setProperty("--main-background", "url(/assets/backgrounds/vanilla.jpg)");
}

/*
 * ============== Drumkit JS ==============
*/
function drumkitCSS() {
  const html = document.getElementsByTagName('html')[0];
  html.style.setProperty("--main-background", "url(/assets/backgrounds/drums.jpg)");
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
  html.style.setProperty("--main-background", "url(/assets/backgrounds/egg.jpg)");
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
 * ============== CSS Variables ==============
*/
function cssvariablesCSS() {
  const html = document.getElementsByTagName('html')[0];
  html.style.setProperty("--main-background", "none");
  html.style.setProperty("--main-background-size", "none");
  html.style.setProperty("--body-background", "#193549");
  html.style.setProperty("--body-text-weight", "100");
  html.style.setProperty("--body-text-size", "50px");
}
function cssvariables() {
  // Get inputs
  const inputs = document.querySelectorAll('.controls input');
  // Set property values
  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
  }
  // Listen for changes
  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mouseMove', handleUpdate));
}

/*
 * ============== Array Cardio One ==============
*/
function arrayCardioOne() {
  // Get your shorts on - this is an array workout!
  // ## Array Cardio Day 1

  // Some data we can work with
  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // -------- Array.prototype.filter() -------- //
  console.log('1. Filter the list of inventors for those who were born in the 1500\'s');
  const fifteenHundreds = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  console.table(fifteenHundreds);
  // .filter() can output different number of array items from input

  // -------- Array.prototype.map() -------- //
  console.log('2. Give us an array of the inventors\' first and last names');
  const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  console.log(fullName);
  // .map() can only output altered array of same length

  // -------- Array.prototype.sort() -------- //
  console.log('3. Sort the inventors by birthdate, oldest to youngest');
  const birthdaySort = inventors.sort((personA, personB) => personA.year > personB.year ? 1 : -1);
  console.table(birthdaySort);
  // .sort() evaluates item1 against item2 and moves it up or down an array

  // -------- Array.prototype.reduce() -------- //
  console.log('4. How many years did all the inventors live?');
  const totalYears = inventors.reduce((total, inventor) => {
    return total + inventor.passed - inventor.year;
  }, 0);
  console.log(totalYears);
  // .reduce() counts items in an array and accepts a starting value after the function definition

  console.log('5. Sort the inventors by years lived');
  const ageSort = inventors.sort((personA, personB) => {
    const lastGuy = personA.passed - personA.year;
    const nextGuy = personB.passed - personB.year;
    return lastGuy > nextGuy ? -1 : 1;
  });
  console.table(ageSort);

  console.log('6. create a list of Boulevards in Paris that contain \'de\' anywhere in the name');
  console.log(`https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  const categories = document.querySelector('.mw-category');
  const links = Array.from(categories.querySelectorAll('a')); // could also use es6 [...~]
  const de = links
                .map(link => link.innerText)
                .filter(streetName => streetName.includes('de'));`);

  console.log('7. Sort the people alphabetically by last name');
  const alpha = people.sort((personA, personB) => {
    const [aLast, aFirst] = personA.split(',');
    const [bLast, bFirst] = personB.split(',');
    return aLast > bLast ? 1 : -1;
  });
  console.log(alpha);
  // split strings into arrays to evaluate values against each other

  console.log('8. Sum up the instances of values in an array');
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  const itemSum = data.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, { } );
  console.log(itemSum);
  // .reduce() can create objects and return frequency of values
}

/*
 * ============== Flex Panels ==============
*/
function flexpanelsCSS() {
  // const body = document.body;
  // console.log(body);
  // body.setProperty("--body-margin", "0");
}
function flexpanels() {
  const panels = document.querySelectorAll('.panel');
  function toggleOpen() {
    this.classList.toggle('open');
  }
  function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }
  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}

/*
 * ============== Dynamic Script Loading ==============
*/
window.onload = () => {
  switch (window.location.pathname) {
    case '/':
      homeCSS();
      break;
    case '/01-jsdrumkit':
      drumkitCSS();
      drumkit();
      break;
    case '/02-js-css-clock':
      clockCSS();
      clock();
      break;
    case '/03-cssvariables':
      cssvariablesCSS();
      cssvariables();
      break;
    case '/04-arraycardio-one':
      arrayCardioOne();
      break;
    case '/05-flexpanels':
      flexpanelsCSS();
      flexpanels();
    default:
      break;
  }
}
