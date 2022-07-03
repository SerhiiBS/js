$(function (){
     const slider = {
          sliderTime: 5000,
          sliderTimerID: undefined,
          currentSlideIndex: 0,
          $slider: $('p'),
          nextSlide() {
               // slider.$slider.remove('id');
               this.currentSlideIndex++
               this.$slider[this.currentSlideIndex].attr('id', 'first')

          }
     }

     $('#next').on('click', () => {
          slider.nextSlide();
     })
})