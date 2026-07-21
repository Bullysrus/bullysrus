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
const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-image");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentIndex = 0;

if (track && images.length > 0) {

nextButton.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});


prevButton.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});

}
