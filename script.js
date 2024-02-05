
const gradient = document.querySelector('.mesh-gradient');
let angle = 0;

function animateGradient() {
    angle = (angle + 1) % 360; // Keep angle within 0-359 range
    const colors = [
        `radial-gradient(at ${50 + 25 * Math.sin(angle * Math.PI / 180)}% ${50 + 25 * Math.cos(angle * Math.PI / 180)}%, rgb(51, 204, 204) 0px, transparent 60%)`, //cyan,
        `radial-gradient(at ${50 + 25 * Math.sin((angle + 79) * Math.PI / 180)}% ${50 + 25 * Math.cos((angle + -85) * Math.PI / 180)}%, #e85f01 0px, transparent 60%)`, //orange,
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


const textArrays = [
  ["GRAPHIC DESIGN - ", "UX/UI - ", "DESIGN - ", "CREATE - "], // For text1
  ["UX/UI - ", "SEO - ", "OPTIMIZATION - ", "WEB DEVELOPMENT - "], // For text2
  ["WEB DEV", "ILLUSTRATION", "UX/UI", "D.E.I",], // For text3 
  ["FRONT END - ", "LEARN - ", "BRANDING - ", "CREATE - "], // For text4
  ["DESIGN - ", "GRAPHICS - ", "OTG - ", "WEB DEV - "], // For text5
  ["WEB", "DEVELOPMENT", "LOGOS", "INTERFACE"], // For text6 
  ["CODING - ", "CURATE - ", "RENDERING- ", "UX/UI - "], // For text7
  ["AI - ", "DESIGN - ", "COLLAB - ", "WEB DEV - "], // For text8
  ["MOBILE", "DEVELOPMENT", "LOGOS", "INTERFACE"], // For text9
  ["CODING - ", "CURATE - ", "RENDERING- ", "UX/UI - "], // For text10
  ["AI - ", "DESIGN - ", "COLLAB - ", "WEB DEV - "], // For text11
  ["MOBILE", "DEVELOPMENT", "LOGOS", "INTERFACE"], // For text12
];

let currentIndexes = new Array(textArrays.length).fill(0);

function switchText(containerIndex, direction = 1) {
  return function() {
    let currentIndex = currentIndexes[containerIndex];
    document.getElementById(`text${containerIndex + 1}`).textContent = textArrays[containerIndex][currentIndex];
    currentIndexes[containerIndex] = (currentIndex + direction + textArrays[containerIndex].length) % textArrays[containerIndex].length;
  };
}

for (let i = 0; i < textArrays.length; i++) {
  let interval = (i < 3 || (i > 5 && i < 9)) ? 3000 : 6000;
  let direction = (i < 3 || (i > 5 && i < 9)) ? 1 : -1;
  setInterval(switchText(i, direction), interval);
}

