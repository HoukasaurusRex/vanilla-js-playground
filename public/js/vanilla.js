function home() {
  const html = document.documentElement;
  const hero = document.querySelector('.home');
  const text = hero.querySelector('h1');
  const kickass = `javascript:var%20s%20=%20document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='http://erkie.github.com/asteroids.min.js';void(0);`
  const pressed = [];

  function shadow(e) {
    const walk = 100; // 100px
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = (x / width * walk) - (walk / 2);
    const yWalk = (y / height * walk) - (walk / 2);

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
    ${xWalk}px ${yWalk * -1}px 0 rgba(255, 0, 0, 0.7),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0, 0, 255, 0.7)
    `;
    // NOTE: add canvas styling
  }
  function secretCode(e) {
    const helloHal = 'hellohal';
    const konami = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba'
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-10, pressed.length - 10);
    console.log(pressed.join(''));
    if (pressed.join('').includes(helloHal)) {
      alert('Hello, Dave');
      hero.style.setProperty("background", "url(/assets/backgrounds/hal9000.png)");
    } else if (pressed.join('').includes(konami)) {
      alert('Break It All');
      window.location = kickass;
    }
  }

  hero.addEventListener('mousemove', shadow);
  window.addEventListener('keyup', secretCode);
}

/*
 * ============== Drumkit JS ==============
*/
function drumkitCSS() {
  const html = document.documentElement;
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
  const html = document.documentElement;
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
  const html = document.documentElement;
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
 * ============== Array Cardio ==============
*/
function arrayCardio() {
  // Get your shorts on - this is an array workout!
  console.log('|======== Array Problem Set One ========>');

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
function arrayCardioTwo() {
  console.clear();
  console.log('|======== Array Problem Set Two ========>');
  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  console.log('** Data Sets **');
  console.table(people);
  console.table(comments);

  // Some and Every Checks
  // Array.prototype.some()
  console.log('is at least one person 19 or older?');
  const isAdult = people.some(person => new Date().getFullYear() - person.year >= 19);
  console.log({ isAdult });
  // Array.prototype.every()
  console.log('is everyone 19 or older?');
  const allAdults = people.every(person => new Date().getFullYear() - person.year >= 19);
  console.log({ allAdults });

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  console.log('find the comment with the ID of 823423');
  const comment = comments.find(comment => comment.id === 823423);
  console.log(comment);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  console.log('delete the comment with the ID of 823423');
  const index = comments.findIndex(comment => comment.id === 823423);
  const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
  ];
  console.table(newComments);
}
function arrayCopyMethods() {
console.clear();
console.log('|======== Array Copy Methods ========>');
// start with strings, numbers and booleans

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:
let team = players;

// however what happens when we update that array?
team[3] = 'Slops';

// now here is the problem!
console.log(team, players);

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const fruits = ['apples', 'banaynays', 'jellybeans', 'greeps']

// one way
let trueFruits = fruits.slice();
trueFruits[2] = 'creenburris';
console.log(fruits, trueFruits);

// or create a new array and concat the old one in
let moreFruits = ['avocadoos'].concat(fruits);
console.log(fruits, moreFruits);

// or use the new ES6 Spread
let sameFruits = [...fruits];
console.log(fruits, sameFruits);

// now when we update it, the original one isn't changed
sameFruits[0] = 'pooples';
console.log(fruits, sameFruits);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80,
  hobbies: {
    outer: 'being a wes',
    inner: 'being a bos'
  }
};

// and think we make a copy:
let newPerson = person;
newPerson = {
  name: 'McPoopy',
  age: 2,
  hobbies: {
    erry: 'nothin',
    day: 'at',
    lyf: 'all'
  }
};
console.log(person, newPerson);

// how do we take a copy instead?
let thisGuy = Object.assign({}, person);
thisGuy = {
  name: 'McPoopy',
  age: 2,
  hobbies: {
    erry: 'nothin',
    day: 'at',
    lyf: 'all'
  }
};
console.log(person, thisGuy);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
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
 * ============== Type Ahead ==============
*/
function typeAheadCSS() {

}
function typeAhead() {

}

/*
 * ============== Canvas ==============
*/
function canvas() {
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 100;

  // GCO effects
  // ctx.globalCompositeOperation = 'source-out';
  // ctx.globalCompositeOperation = 'destination-over';
  // ctx.globalCompositeOperation = 'destination-atop';
  // ctx.globalCompositeOperation = 'luminosity';
  ctx.globalCompositeOperation = 'color';
  // ctx.globalCompositeOperation = 'hue';
  // ctx.globalCompositeOperation = 'exclusion';

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let direction = true;

  function draw(e) {
    if (!isDrawing) return;
    // console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // Start from
    ctx.moveTo(lastX, lastY);
    // Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // Color and Size
    hue++;
    if(hue >= 360) { hue = 0; }
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
    if(direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
}

/*
 * ============== Console Commander ==============
*/
function consoleCommander() {
  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

  function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
  }

  // Regular
  console.log('hello');

  // clearing
  console.clear();

  // Interpolated -- can be replaced with es6 backticks
  console.log('hello, I am a %s interpolation', '💩');

  // Styled
  console.log('%c I am some sick nasty text', 'font-size: 20px; color: white; background: blue; text-shadow: 3px 3px red;');

  // warning!
  console.warn('Hey look out!');

  // Error :|
  console.error('OH FUCK');

  // Info
  console.info('Pooping after eating leaves more room for eating');

  // Testing
  const p = document.querySelector('p');
  console.assert(p.classList.contains('bullshit'), 'That ain\'t right')

  // Viewing DOM Elements
  console.log(p);
  console.dir(p);

  // Grouping together
  dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}.`);
    console.log(`He's ${dog.age} years old`);
    console.log(`That's ${dog.age * 7} in dog years!`);
    console.groupEnd(`${dog.name}`);
  })

  // counting
  console.count('JT');
  console.count('Val');
  console.count('JT');
  console.count('Val');
  console.count('JT');
  console.count('JT');
  console.count('Val');
  console.count('JT');
  console.count('JT');
  console.count('Val')
  console.count('Val')
  console.count('Val')

  // timing
  console.time('fetching some data');
  fetch('https://api.github.com/users/pterobyte')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching some data')
      console.log(data);
    });

  // table
  console.table(dogs);
}

/*
 * ============== Multicheck ==============
*/
function multiCheck() {
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  let lastChecked;
  function handleCheck(e) {
    // Check if shifkey down and box is checked
    let inBetween = false;
    if (e.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if (checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween;
          console.log('inBetween triggered');
        }
        if (inBetween) {
          checkbox.checked = true;
        }
      })
    }
    lastChecked = this;
  }
  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
}

/*
 * ============== Video Player ==============
*/
function videoPlayer() {
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
}

/*
 * ============== Slide on Scroll ==============
*/
function slideOnScroll() {
  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide(e) {
    sliderImages.forEach((image) => {
      // halfway through the image
      const slideInAt = (window.scrollY + window.innerHeight) - (image.height / 2);
      // bottom of image
      const imageBottom = image.offsetTop + image.height;
      const isHalfShown = slideInAt > image.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      console.log(`Image half shown: ${isHalfShown} -- Image not yet scrolled past: ${isNotScrolledPast}`);
      if (isHalfShown && isNotScrolledPast) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));
}

/*
 * ============== Local Storage Tapas ==============
*/
function localStorageTapas() {
  const addItems = document.querySelector('.localtapas__add-items');
  const platesList = document.querySelector('.localtapas__plates');
  const plates = JSON.parse(localStorage.getItem('plates')) || [];

  function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
    };
    plates.push(item);
    populateList(plates, platesList);
    localStorage.setItem('plates', JSON.stringify(plates));
    this.reset();
    console.log(item);
  }
  // why = []?
  function populateList(items = [], itemsList) {
    itemsList.innerHTML = items.map((item, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="items${i}" ${item.done ? 'checked' : ''}/>
          <label for="items${i}">${item.text}</label>
        </li>
      `;
    }).join('');
  }
  function toggleDone(e) {
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    plates[index].done = !plates[index].done;
    localStorage.setItem('plates', JSON.stringify(plates));
    populateList(plates, platesList);
  }

  addItems.addEventListener('submit', addItem);
  platesList.addEventListener('click', toggleDone)

  populateList(plates, platesList);

  // TODO:
  // check all button
  // uncheck all button
  // reset button
}

/*
 * ============== Sort Bands ==============
*/
function sortBands() {
  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

  function strip(name) {
    // regexplanation:
    /*  //   -> contains regex
     *  ^()  -> "starts with"
     *  |    -> "or"
     *  i    -> case "insensitive"
     *  , '' -> replace with ''
    */
    return name.replace(/^(a |the |an )/i, '').trim();
  }
  const bandsSorted = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
  document.querySelector('#bands').innerHTML =
    bandsSorted
      .map(band => `<li>${band}</li>`)
      .join('');
  console.log(bandsSorted);
}

/*
 * ============== Webcam ==============
*/
function webcam() {
  const video = document.querySelector('.player');
  const canvas = document.querySelector('.photo');
  const ctx = canvas.getContext('2d');
  const strip = document.querySelector('.strip');
  const snap = document.querySelector('.snap');
  let pixelFunction = undefined;

  function getVideo() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((localMediaStream) => {
        video.srcObject = localMediaStream;
        video.play();
      })
      .catch((err) => {
        console.error('Video cannot capture without access: ', err);
      });
  }
  function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    console.log('Painted');

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
      // take out pixels
      let pixels = ctx.getImageData(0, 0, width, height);
      // mess with them
      if (pixelFunction) { pixels = pixelFunction(pixels); }
      // ctx.globalAlpha = 0.3;

      // put them back
      ctx.putImageData(pixels, 0, 0);
    }, 16);
  }
  function takePhoto() {
    // play capture sound
    snap.currentTime = 0;
    snap.play();
    // take data out of Canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Pretty Face" />`;
    strip.insertBefore(link, strip.firstChild);
  }
  function redEffect(px) {
    for (let i = 0; i < px.data.length; i += 4) {
      // sets each pixel to different color value
      px.data[i + 0] = px.data[i + 0] + 50 // red
      px.data[i + 1] = px.data[i + 1] - 30 // green
      px.data[i + 2] = px.data[i + 2] * 0.5 // blue
    }
    return px;
  }
  function rgbSplit(px) {
    for (let i = 0; i < px.data.length; i += 4) {
      // sets each pixel to future/past pixel value
      px.data[i - 200] = px.data[i + 0] // red
      px.data[i + 300] = px.data[i + 1] // green
      px.data[i - 150] = px.data[i + 2] // blue
    }
    return px;
  }
  function greenScreen(px) {
    const levels = {};
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });
    for (let i = 0; i < px.data.length; i += 4) {
      // sets each pixel to variable
      red = px.data[i + 0];
      green = px.data[i + 1];
      blue = px.data[i + 2];
      alpha = px.data[i + 3];
      if (
        red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax
      ) {
        px.data[i + 3] = 0; // set transparent and take out pixel
      }
    }
    return px;
  }
  getVideo();
  video.addEventListener('canplay', paintToCanvas);
  return {
    takePhoto,
    redEffect,
    rgbSplit,
    greenScreen
  };
}

/*
 * ============== Speech Detection ==============
*/
function speechDetection() {
  // setting speech recognition name to be same regardless of browser
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  // create new instance of SpeechRecognition
  const recognition = new SpeechRecognition();
  // displays results as you go along
  recognition.interimResults = true;

  const words = document.querySelector('.words');
  let p = document.createElement('p');
  words.appendChild(p);

  recognition.addEventListener('result', (e) => {
    // convert to array, grab nested text, then join to string
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

    p.textContent = transcript;
    if (e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }
    if (transcript.includes('take me home')) {
      window.location.pathname = '/';
    } else if (transcript.includes('reload the page')) {
      window.location.reload(true);
    }
    // NOTE: debounce listener
    console.log(transcript);
  });

  recognition.addEventListener('end', recognition.start);

  recognition.start();
}

/*
 * ============== Dynamic Script Loading ==============
*/
window.onload = () => {
  switch (window.location.pathname) {
    case '/':
      home();
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
    case '/04-arraycardio':
      arrayCardio();
      arrayCardioTwo();
      arrayCopyMethods();
      break;
    case '/05-flexpanels':
      flexpanelsCSS();
      flexpanels();
    case '/06-typeahead':
      typeAheadCSS();
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
    default:
      break;
  }
}

/*
 * NOTE:
*/
// define html and body in window.onload and pass into functions
// canvas: add user controls
// webcam: add filter Functions
// speechRecognition: listen for commands and run functions (e.g. get weather)
