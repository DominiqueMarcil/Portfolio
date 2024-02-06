
const gradient = document.querySelector('.mesh-gradient');// Select the mesh gradient
let angle = 0; // Initial angle

function animateGradient() { //Responsible for animating the gradient
    angle = (angle + 0.75) % 360; // Keep angle within 0-359 range
    const colors = [
    
    `radial-gradient(at ${50 + 25* Math.sin(angle * Math.PI / 180)}% ${50 + 20 * Math.cos(angle * Math.PI / 180)}%, rgb(51, 204, 204) 0px, transparent 40%)`, // cyan
    `radial-gradient(at ${70 + 50* Math.sin(angle * Math.PI / 180)}% ${80 + 0 * Math.cos(angle * Math.PI / 180)}%, rgb(204, 0 , 255) 0px, transparent 50%)`, // cyan
    `radial-gradient(at ${50 + 25 * Math.sin((angle + 79) * Math.PI / 180)}% ${50 + 25 * Math.cos((angle + -85) * Math.PI / 180)}%, #e85f01 0px, transparent 60%)`, // orange
    `radial-gradient(at ${50 + 25 * Math.sin((angle + 15) * Math.PI / 180)}% ${50 + 25 * Math.cos((angle + 15) * Math.PI / 180)}%, rgb(222, 81, 251) 0px, transparent 60%)`, // purple
    `radial-gradient(at ${20 + -30 * Math.sin((angle + 42) * Math.PI / 180)}% ${-50 + -25 * Math.cos((angle + -42) * Math.PI / 180)}%, rgb(0, 0, 255) 0px, transparent 60%)`, // blue 
    `radial-gradient(at ${50 + 25 * Math.sin((angle + 10) * Math.PI / 180)}% ${50 + 25 * Math.cos((angle + 25) * Math.PI / 180)}%, #f6ea41 0px, transparent 60%)`, // yellow
    `radial-gradient(at ${50 + 35 * Math.sin((angle + 57) * Math.PI / 180)}% ${50 + 35 * Math.cos((angle + -57) * Math.PI / 180)}%, rgb(200, 50, 66) 0px, #9600ff 60%)`, // red
];

    // gradient.style.filter = "blur(20px)"; // Apply blur filter
    gradient.style.background = colors.join(', ');

    requestAnimationFrame(animateGradient);
}

animateGradient();

// const textArrays = [
//   ["GRAPHIC DESIGN - ", "UX/UI - ", "DESIGN - ", "CREATE - "], // For text1
//   ["UX/UI - ", "SEO - ", "OPTIMIZATION - ", "WEB DEVELOPMENT - "], // For text2
//   ["WEB DEV", "ILLUSTRATION", "UX/UI", "D.E.I",], // For text3 
//   ["FRONT END - ", "LEARN - ", "BRANDING - ", "BUILD - "], // For text4
//   ["DESIGN - ", "GRAPHICS - ", "OTG - ", "WEB DEV - "], // For text5
//   ["WEB", "DEVELOPMENT", "LOGOS", "INTERFACE"], // For text6 
//   ["CODING - ", "CURATE - ", "RENDERING- ", "UX/UI - "], // For text7
//   ["AI - ", "DESIGN - ", "COLLAB - ", "WEB DEV - "], // For text8
//   ["MOBILE", "DEVELOPMENT", "LOGOS", "INTERFACE"], // For text9
//   ["CODING - ", "CURATE - ", "RENDERING- ", "UX/UI - "], // For text10
//   ["AI - ", "DESIGN - ", "COLLAB - ", "WEB DEV - "], // For text11
//   ["MOBILE", "DEVELOPMENT", "LOGOS", "INTERFACE"], // For text12
// ];

// // Function to shuffle array elements
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// // Shuffle each array in textArrays
// textArrays.forEach(array => shuffleArray(array));

// let currentIndexes = new Array(textArrays.length).fill(0);

// for (let i = 0; i < textArrays.length; i++) {
//   let interval = (i < 3 || (i > 5 && i < 9)) ? 3000 : 4000;
//   let direction = (i < 3 || (i > 5 && i < 9)) ? 1 : -1;
  
//   setInterval((function(index, dir) {
//     return function() {
//       let currentIndex = currentIndexes[index];
//       const containerId = `text${index + 1}`;
//       const container = document.getElementById(containerId);
      
//       // Fade out
//       fadeOut(container, function() {
//         container.textContent = textArrays[index][currentIndex];
//         // Fade in
//         fadeIn(container);
//         currentIndexes[index] = (currentIndex + dir + textArrays[index].length) % textArrays[index].length;
//       });
//     };
//   })(i, direction), interval);
// }

// function fadeOut(element, callback) {
//   let opacity = 1;
//   const fade = () => {
//     opacity -= 0.05;
//     element.style.opacity = opacity;
//     if (opacity <= 0) {
//       element.style.opacity = 0;
//       callback();
//     } else {
//       requestAnimationFrame(fade);
//     }
//   };
//   fade();
// }

// function fadeIn(element) {
//   let opacity = 0;
//   const fade = () => {
//     opacity += 0.05;
//     element.style.opacity = opacity;
//     if (opacity >= 1) {
//       element.style.opacity = 1;
//     } else {
//       requestAnimationFrame(fade);
//     }
//   };
//   fade();
// }


