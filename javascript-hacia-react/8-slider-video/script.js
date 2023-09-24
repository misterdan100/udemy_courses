function toggleMenu() {
    const menuIcon = document.querySelector('.menuIcon');
    const navbar = document.querySelector('#navbar')
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');   
};

const slideShow = document.querySelector('#slideShow');
const slides = document.querySelectorAll('#slideShow video');

let index = 0;

function nextSlider() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length; // para sumarle 1 al indice y si es 4 regrese a 0
    slides[index].classList.add('active');

}

function prevSlider() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length; // para sumarle 1 al indice y si es 4 regrese a 0
    slides[index].classList.add('active');
}

const slideShowText = document.querySelector('#slideShowText');
const slideText = document.querySelectorAll('#slideShowText div');

let i = 0;

function nextSlideText() {
    slideText[i].classList.remove('active');
    i = (i + 1 ) % slideText.length;
    slideText[i].classList.add('active');
}

function prevSlideText() {
    slideText[i].classList.remove('active');
    i = (i - 1 + slideText.length) % slideText.length;
    slideText[i].classList.add('active');
}