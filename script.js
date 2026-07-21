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

document.addEventListener("DOMContentLoaded", () => {

    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {

        const track = carousel.querySelector(".carousel-track");
        const images = carousel.querySelectorAll(".carousel-image");
        const next = carousel.querySelector(".next");
        const prev = carousel.querySelector(".prev");

        let index = 0;

        if (!track || images.length === 0) return;

        next.addEventListener("click", () => {
            index++;

            if (index >= images.length) {
                index = 0;
            }

            track.style.transform = `translateX(-${index * 100}%)`;
        });


        prev.addEventListener("click", () => {
            index--;

            if (index < 0) {
                index = images.length - 1;
            }

            track.style.transform = `translateX(-${index * 100}%)`;
        });

    });

});
});
