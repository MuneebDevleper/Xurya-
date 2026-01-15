let bar = document.querySelector(".bar");
let nemu = document.querySelector(".inner-menu");
bar.addEventListener('click', () => {
    console.log("active");
    bar.classList.toggle('active');
    nemu.classList.toggle('active');
});







const element = document.querySelectorAll(".anime, ani");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    })

}, {

    threshold: 0.5
});

for (let i = 0; i < element.length; i++) {
    const el = element[i];
    observer.observe(el);
}













var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}