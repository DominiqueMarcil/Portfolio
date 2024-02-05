
const gradient = document.querySelector('.mesh-gradient');
let angle = 0;

function animateGradient() {
    angle = (angle + 1) % 360; // Keep angle within 0-359 range
    const colors = [
        `radial-gradient(at ${50 + 25 * Math.sin(angle * Math.PI / 180)}% ${50 + 25 * Math.cos(angle * Math.PI / 180)}%, rgb(51, 204, 204) 0px, transparent 60%)`, //cyan,
        `radial-gradient(at ${50 + 25 * Math.sin((angle + 79) * Math.PI / 180)}% ${50 + 25 * Math.cos((angle + -85) * Math.PI / 180)}%, rgb(233, 109, 131) 0px, transparent 60%)`, //orange,
        `radial-gradient(at ${50 + 25 * Math.sin((angle + 15) * Math.PI / 180)}% ${50 + 25 * Math.cos((angle + 15) * Math.PI / 180)}%, rgb(222, 81, 251) 0px, transparent 60%)`, //purple,
        `radial-gradient(at ${50 + 25 * Math.sin((angle + 42) * Math.PI / 180)}% ${50 + 25 * Math.cos((angle + -42) * Math.PI / 180)}%, rgb(0, 0, 255) 0px, transparent 60%)`, //blue,

        `radial-gradient(at ${50 + 25 * Math.sin((angle + 10) * Math.PI / 180)}% ${50 + 25 * Math.cos((angle + 25) * Math.PI / 180)}%, rgb(223, 220, 113) 0px, transparent 60%)`, //yellow,
        `radial-gradient(at ${50 + 25 * Math.sin((angle + 57) * Math.PI / 180)}% ${50 + 25 * Math.cos((angle + -57) * Math.PI / 180)}%, rgb(200, 50, 66) 0px, #a290ff 60%)`,//red,
    ];

    // gradient.style.filter = "blur(20px)"; // Apply blur filter
    gradient.style.background = colors.join(', ');

    requestAnimationFrame(animateGradient);
}

animateGradient();

// changing words

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
