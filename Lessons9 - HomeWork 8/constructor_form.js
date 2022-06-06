document.addEventListener('DOMContentLoaded', function () {
    const CARD_PERSON = function (data) {
        this.addValue = function (event) {
            event.preventDefault();
            this.numberCard = data.number.value;
            this.holderNameCard = data.holderName.value;
            this.monthCard = data.month.value;
            this.yearCard = data.year.value;
            this.codeCard = data.cvv.value;
            console.log(data.cvv.value)
        }

        this.getValue = function (get = { number, holderName, data, code }) {
            get.number = this.numberCard;
            get.holderName = this.holderNameCard;
            get.data = (`${this.monthCard} / ${this.yearCard}`);
            get.code = this.codeCard;
            console.log(`
                Власник карти: ${get.holderName};
                Номер карти: ${get.number};
                Карта дійсна до: ${get.data}; 
                CVV: ${get.code}`);
        }
    }

    const NEW_CARD_PERSON = new CARD_PERSON(data = {
        number: document.querySelector('.js--number'),
        holderName: document.querySelector('.js--holder-name'),
        month: document.querySelector('.js--month'),
        year: document.querySelector('.js--year'),
        cvv: document.querySelector('.js--cvv')
    });

    const form = document.querySelector('.js--form');
    form.addEventListener('submit', NEW_CARD_PERSON.addValue);
    form.addEventListener('submit', NEW_CARD_PERSON.getValue);
})