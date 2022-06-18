const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
const slides = document.querySelectorAll('.slide');


let currentIndexSlide = 0;
let timer;

const slider = function () {

    function showButtons() {
        buttonPrev.disabled = currentIndexSlide === 0;
        buttonNext.disabled = currentIndexSlide === slides.length - 1;
    }
    showButtons();

    const nextSlide = function() {
            slides[currentIndexSlide].classList.remove('active');
            currentIndexSlide++;
            slides[currentIndexSlide].classList.add('active');
            showButtons();
            clearInterval(timer);
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
