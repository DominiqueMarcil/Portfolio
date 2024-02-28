
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


var contact = document.querySelector(".contact");
contact.addEventListener("click", function() {
    this.innerHTML = "";
    console.log("clicked")
});

