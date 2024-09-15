const container = document.querySelector('.scrolling-container');
const images = document.querySelector('.scrolling-images');
let scrollAmount = 0;
const scrollSpeed = 2; 
const imageWidth = 200; 
const containerWidth = container.clientWidth;
const totalWidth = imageWidth * images.children.length;

function scrollImages() {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= totalWidth / 2) {
        scrollAmount = 0;
    }
    images.style.transform = translateX(-scrollAmount);
    requestAnimationFrame(scrollImages);
}

scrollImages();