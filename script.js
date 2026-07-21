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
        const slides = carousel.querySelectorAll(".carousel-image");
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
