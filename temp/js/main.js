document.addEventListener('DOMContentLoaded', function () {

    const CardPerson = function(input) {
        this.input = document.querySelector(input);
        
        this.addItem = function(event) {
            event.preventDefault();
            console.log(this.input.value);

        }
    }

    const newCardPerson = new CardPerson ('.js--input-number-card');

    const form = document.querySelector('.js--form');
    form.addEventListener('submit', newCardPerson.addItem);


})