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

    const carousel = document.querySelector(".carousel");

    if (!carousel) return;

    const track = carousel.querySelector(".carousel-track");
    const images = carousel.querySelectorAll(".carousel-image");
    const nextButton = carousel.querySelector(".next");
    const prevButton = carousel.querySelector(".prev");

    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener("click", function () {
        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        updateCarousel();
    });

    prevButton.addEventListener("click", function () {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        updateCarousel();
    });

});
