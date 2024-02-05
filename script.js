
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


// // Array containing the text for each text segment
// const textArrays = [
//   ["GRAPHIC DESIGN - ", "UX/UI - ", "DESIGN - ", "CREATE - "], // For text1
//   ["UX/UI - ", "SEO - ", "OPTIMIZATION - ", "WEB DEVELOPMENT - "], // For text2
//   ["WEB DEV", "ILLUSTRATION", "UX/UI", "UX/UI",], // For text3 
// ];

// // Array to keep track of the current index for each text segment
// let currentIndexes = [0, 0, 0];

// // Function to switch through the text in each array and update the corresponding text segment
// function switchText(containerIndex) {
//   return function() {
//     // Get the current index for this text segment
//     let currentIndex = currentIndexes[containerIndex];

//     // Update the text content of the span element with the corresponding id
//     document.getElementById(`text${containerIndex + 1}`).textContent = textArrays[containerIndex][currentIndex];

//     // Update the current index, wrapping back to 0 if we've reached the end of the array
//     currentIndexes[containerIndex] = (currentIndex + 1) % textArrays[containerIndex].length;
//   };
// }

// // Set interval to call switchText for each text switcher every 2 seconds (2000 milliseconds)
// for (let i = 0; i < textArrays.length; i++) {
//   setInterval(switchText(i), 2000);
// }


// Existing text arrays and current indexes
const textArrays = [
  ["GRAPHIC DESIGN - ", "UX/UI - ", "DESIGN - ", "CREATE - "], // For text1
  ["UX/UI - ", "SEO - ", "OPTIMIZATION - ", "WEB DEVELOPMENT - "], // For text2
  ["WEB DEV", "ILLUSTRATION", "UX/UI", "D.E.I",], // For text3 
];
let currentIndexes = [0, 0, 0];

// New text arrays and current indexes
const newTextArrays = [
  ["FRONT END - ", "LEARN - ", "BRANDING - ", "CREATE - "], // For text4
  ["DESIGN - ", "GRAPHICS - ", "OTG - ", "WEB DEV - "], // For text5
  ["WEB", "DEVELOPMENT", "LOGOS", "INTERFACE"], // For text6 
];
let newCurrentIndexes = [newTextArrays[0].length - 1, newTextArrays[1].length - 1, newTextArrays[2].length - 1];

// Existing switchText function
function switchText(containerIndex) {
  return function() {
    // Get the current index for this text segment
    let currentIndex = currentIndexes[containerIndex];

    // Update the text content of the span element with the corresponding id
    document.getElementById(`text${containerIndex + 1}`).textContent = textArrays[containerIndex][currentIndex];

    // Update the current index, wrapping back to 0 if we've reached the end of the array
    currentIndexes[containerIndex] = (currentIndex + 1) % textArrays[containerIndex].length;
  };
}

// New function to switch text in the opposite direction
function switchNewText(containerIndex) {
  return function() {
    // Get the current index for this text segment
    let currentIndex = newCurrentIndexes[containerIndex];

    // Update the text content of the span element with the corresponding id
    document.getElementById(`text${containerIndex + 4}`).textContent = newTextArrays[containerIndex][currentIndex];

    // Update the current index, wrapping back to the last index if we've reached the start of the array
    newCurrentIndexes[containerIndex] = (currentIndex - 1 + newTextArrays[containerIndex].length) % newTextArrays[containerIndex].length;
  };
}

// Existing setInterval calls
for (let i = 0; i < textArrays.length; i++) {
  setInterval(switchText(i), 2000);
}

// New setInterval calls
for (let i = 0; i < newTextArrays.length; i++) {
  setInterval(switchNewText(i), 3000);
}