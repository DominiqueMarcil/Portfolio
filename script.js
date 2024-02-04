
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

