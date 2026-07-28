// Bullys R Us Website Scripts

console.log("Bullys R Us Luxury Website Loaded");


document.addEventListener("DOMContentLoaded", function () {



/* ==========================
   SECTION FADE ANIMATION
========================== */


const sections = document.querySelectorAll(
    ".hero"
);



const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.1
});


sections.forEach(section => {

    section.classList.add("fade-section");

    observer.observe(section);

});




/* ==========================
   CAROUSELS
========================== */


const carousels = document.querySelectorAll(".carousel");



carousels.forEach(function(carousel) {



    const track = carousel.querySelector(".carousel-track");

    const slides = carousel.querySelectorAll(".carousel-image, .female-slide");

    const nextButton = carousel.querySelector(".next");

    const prevButton = carousel.querySelector(".prev");



    let currentIndex = 0;



    if (!track || slides.length === 0) {

        return;

    }




    function updateCarousel() {


        track.style.transform = 
        "translateX(-" + (currentIndex * 100) + "%)";


    }





    if (nextButton) {


        nextButton.addEventListener("click", function() {


            currentIndex++;


            if (currentIndex >= slides.length) {


                currentIndex = 0;


            }


            updateCarousel();


        });


    }





    if (prevButton) {


        prevButton.addEventListener("click", function() {


            currentIndex--;


            if (currentIndex < 0) {


                currentIndex = slides.length - 1;


            }


            updateCarousel();


        });


    }



});







/* ==========================
   MOBILE MENU
========================== */


const menuButton = document.querySelector(".menu-toggle");

const mobileNav = document.querySelector("#mobile-nav");



if (menuButton && mobileNav) {



    menuButton.addEventListener("click", function() {



        mobileNav.classList.toggle("active");



    });



}







/* ==========================
   GALLERY LIGHTBOX
========================== */


const galleryImages = document.querySelectorAll(".gallery-grid img");


const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");


const closeBtn = document.getElementById("close-lightbox");

const prevBtn = document.getElementById("prev-image");

const nextBtn = document.getElementById("next-image");



let currentImage = 0;



if (
    galleryImages.length &&
    lightbox &&
    lightboxImage
) {



    function showImage() {


        lightboxImage.src = galleryImages[currentImage].src;


    }





    galleryImages.forEach((img, index) => {



        img.addEventListener("click", function() {



            currentImage = index;


            showImage();


            lightbox.style.display = "flex";



        });



    });





    if (nextBtn) {



        nextBtn.addEventListener("click", function() {



            currentImage = 
            (currentImage + 1) % galleryImages.length;


            showImage();



        });



    }






    if (prevBtn) {



        prevBtn.addEventListener("click", function() {



            currentImage = 
            (currentImage - 1 + galleryImages.length) 
            % galleryImages.length;


            showImage();



        });



    }






    if (closeBtn) {



        closeBtn.addEventListener("click", function() {



            lightbox.style.display = "none";



        });



    }





    lightbox.addEventListener("click", function(e) {



        if (e.target === lightbox) {



            lightbox.style.display = "none";



        }



    });



}



});
const reviewTrack = document.querySelector(".testimonial-track");
const reviewCards = document.querySelectorAll(".testimonial-card");
const reviewNext = document.querySelector(".testimonial-carousel .next");
const reviewPrev = document.querySelector(".testimonial-carousel .prev");

let reviewIndex = 0;


if(reviewTrack && reviewCards.length){

reviewNext.addEventListener("click",()=>{

reviewIndex++;

if(reviewIndex >= reviewCards.length){
reviewIndex = 0;
}

reviewTrack.style.transform =
`translateX(-${reviewIndex * 100}%)`;

});


reviewPrev.addEventListener("click",()=>{

reviewIndex--;

if(reviewIndex < 0){
reviewIndex = reviewCards.length - 1;
}

reviewTrack.style.transform =
`translateX(-${reviewIndex * 100}%)`;

});

}
