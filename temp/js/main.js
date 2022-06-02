document.addEventListener('DOMContentLoaded', function () {

    const CardPerson = function (numberCard, holderName, month, year, code) {


        this.addItem = function (event) {
            event.preventDefault();
            this.numberCard = document.querySelector(numberCard);
            this.holderName = document.querySelector(holderName);
            this.month = document.querySelector(month);
            this.year = document.querySelector(year);
            this.code = document.querySelector(code)
        }
        this.getValue = function (num, name, data, code) {
            num = this.numberCard.value;
            name = this.holderName.value;
            data = (`${this.month.value} / ${this.year.value}`);
            code = this.code.value;
            console.log(`
            Власник карти: ${name};
            Номер карти: ${num};
            Карта дійсна до: ${data};
            CVV: ${code}
            `);
        }
    }
    
    const newCardPerson = new CardPerson('.js--input-number-card', '.js--input-holder-name', '.js--input-month', '.js--input-year', '.js--input-cvv');

    const form = document.querySelector('.js--form');
    form.addEventListener('submit', newCardPerson.addItem);
    form.addEventListener('submit', newCardPerson.getValue);


})