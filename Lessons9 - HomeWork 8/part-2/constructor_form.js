document.addEventListener('DOMContentLoaded', function () {
    const CARD_PERSON = function (data) {
        this.addValue = function (event) {
            event.preventDefault();
            this.numberCard = data.number.value;
            this.holderNameCard = data.holderName.value;
            this.monthCard = data.month.value;
            this.yearCard = data.year.value;
            this.codeCard = data.cvv.value;
        }

        this.checkValue = function ()  {
            if (this.numberCard.length === 16) {
                this.numberCheck = this.numberCard;
            } else {
                alert('Невірно вказан номер карти');
                alert('Спробуй ще =)');
                location.reload();
            }
            if (this.holderNameCard.length > 3 && this.holderNameCard.length <= 10) {
                 this.holderNameCheck = this.holderNameCard;
            } else {
                alert('Невірно вказані Прізвище власника');
                alert('Спробуй ще =)');
                location.reload();
            }
            if (this.yearCard === typeof 'number' &&
                this.monthCard === typeof 'number' &&
                this.monthCard > 0 &&
                this.yearCard > 0) {
                 this.monthCheck = this.monthCard;
                 this.yearCheck = this.yearCard;
            } else {
                alert('Невірно вказана дата');
                alert('Спробуй ще =)');
                location.reload();
            }
            if (this.codeCard.length === 3) {
                this.codeCheck = this.codeCard;
            } else {
                alert('Невірно CVV');
                alert('Спробуй ще =)');
                location.reload();
            }

        }

        this.getValue = function (get = { number, holderName, data, code }) {
            get.number = this.numberCheck;
            get.holderName = this.holderNameCheck;
            get.data =  (`${this.monthCheck} / ${this.yearCheck}`);
            get.code = this.codeCheck;
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
    form.addEventListener('submit', NEW_CARD_PERSON.checkValue);
    form.addEventListener('submit', NEW_CARD_PERSON.getValue);
})