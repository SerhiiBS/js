const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
const slides = document.querySelectorAll('.slide');

let currentIndexSlide = 0;

function showButtons() {
    if (currentIndexSlide === 0) {
        buttonPrev.disabled = true;
    } else {
        buttonPrev.disabled = false;
    }
    if (currentIndexSlide === slides.length - 1) {
        buttonNext.disabled = true;
    } else {
        buttonNext.disabled = false;
    }
}
showButtons();

const nextSlide = function() {
    slides[currentIndexSlide].classList.remove('active');
    currentIndexSlide++;
    slides[currentIndexSlide].classList.add('active');
    showButtons();
}
const prevSlide = function() {
    slides[currentIndexSlide].classList.remove('active');
    currentIndexSlide--;
    slides[currentIndexSlide].classList.add('active');
    showButtons();
}

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);