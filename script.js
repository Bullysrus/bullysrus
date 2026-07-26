// Bullys R Us Website Scripts

console.log("Bullys R Us Luxury Website Loaded");


// Adds a small fade effect as sections appear

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

}, {

threshold: .15

});



sections.forEach(section => {

section.style.opacity = "0";

section.style.transform = "translateY(30px)";

section.style.transition = "all .8s ease";

observer.observe(section);

});

document.addEventListener("DOMContentLoaded", function () {

    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(function(carousel) {

        const track = carousel.querySelector(".carousel-track");
     const slides = carousel.querySelectorAll(".carousel-image, .female-slide");
        const nextButton = carousel.querySelector(".next");
        const prevButton = carousel.querySelector(".prev");

        let currentIndex = 0;

        if (!track || slides.length === 0 || !nextButton || !prevButton) {
            return;
        }

        nextButton.addEventListener("click", function() {

            currentIndex++;

            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }

            track.style.transform = 
            "translateX(-" + (currentIndex * 100) + "%)";

        });


        prevButton.addEventListener("click", function() {

            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            }

            track.style.transform = 
            "translateX(-" + (currentIndex * 100) + "%)";

        });

    });

});
const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

if (menuButton && mobileNav) {

    menuButton.addEventListener("click", function() {

        mobileNav.classList.toggle("active");

    });

}
const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const closeBtn = document.getElementById("close-lightbox");
const prevBtn = document.getElementById("prev-image");
const nextBtn = document.getElementById("next-image");

let currentImage = 0;

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentImage=index;

showImage();

lightbox.style.display="flex";

});

});

function showImage(){

lightboxImage.src=galleryImages[currentImage].src;

}

nextBtn.onclick=function(){

currentImage=(currentImage+1)%galleryImages.length;

showImage();

}

prevBtn.onclick=function(){

currentImage=(currentImage-1+galleryImages.length)%galleryImages.length;

showImage();

}

closeBtn.onclick=function(){

lightbox.style.display="none";

}

lightbox.onclick=function(e){

if(e.target===lightbox){

lightbox.style.display="none";

}

}
