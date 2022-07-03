$(function () {
    const autoSlider = {
        sliderTime: 5000,
        sliderTimerID: undefined,
        $slider: $('p'),
        nextSlide() {
            let currentSlide = $('p.active'),
                currentSlideIndex = currentSlide.index(),
                nextSlide = currentSlide.next(),
                nextSlideIndex = currentSlideIndex + 1;
            currentSlide.removeClass('active');
            if (nextSlideIndex === ($('p').length)) {
                $("#first").addClass('active');
            } else {
                nextSlide.addClass('active');
            }
        },
        startSlider() {
            autoSlider.sliderTimerID = setInterval(this.nextSlide, autoSlider.sliderTime);
        },
        stopOnHover() {
            $('p').hover(function () {
                    clearInterval(autoSlider.sliderTimerID);
                },
                function () {
                    autoSlider.sliderTimerID = setInterval(autoSlider.nextSlide, autoSlider.sliderTime);
                })
        },
    }

    autoSlider.startSlider();
    autoSlider.stopOnHover();

    $('#next').on('click', () => {
        autoSlider.nextSlide();
        clearInterval(autoSlider.sliderTimerID);
        autoSlider.sliderTimerID = setInterval(autoSlider.nextSlide, autoSlider.sliderTime);
    });

    $('#prev').on('click', () => {
        let currentSlide = $('p.active'),
            currentSlideIndex = currentSlide.index(),
            prevSlide = currentSlide.prev(),
            prevSlideIndex = currentSlideIndex - 1;
        currentSlide.removeClass('active');
        if (prevSlideIndex === ($('p:first').index() - 1)) {
            $("#last").addClass('active');
        } else {
            prevSlide.addClass('active');
        }
    });
})