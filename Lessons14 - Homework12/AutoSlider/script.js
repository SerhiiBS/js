const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
const slides = document.querySelectorAll('.slide');

let currentIndexSlide = 0;
let timer;

const slider = function () {

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
        autoSlider();
    }
    const prevSlide = function() {
        slides[currentIndexSlide].classList.remove('active');
        currentIndexSlide--;
        slides[currentIndexSlide].classList.add('active');
        showButtons();
    }

    const autoSlider = function () {
        timer = setTimeout(nextSlide, 5000);
        if (currentIndexSlide === slides.length - 1) {
            clearTimeout(timer);
        }
    }
    autoSlider();

    buttonNext.addEventListener('click', nextSlide);
    buttonPrev.addEventListener('click', prevSlide);
}
    slider();
