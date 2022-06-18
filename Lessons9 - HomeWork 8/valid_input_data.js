
function formValidate(field) {

    field.inputNumber.addEventListener('input', function () {

        const value = this.value;
        if (value.length >= 16) {
            checkAllField()
        }
        this.value = value.substring(0, 16);
        document.querySelector('.js--input-number').innerHTML = `
                     ${value.substring(0, 4)} ${value.substring(4, 8)}
                     ${value.substring(8, 12)} ${value.substring(12, 16)}
                 `;
    });

    field.inputHolderName.addEventListener('input', function () {
        const value = this.value;
        if (value.length > 3) {
            checkAllField()
        }
        document.querySelector('.js--input-holder-name').innerHTML = value;
    });



    field.inputMonth.addEventListener('input', function () {
        if (this.value !== 'null') {
            document.querySelector('.js--input-month').innerHTML = this.value
        }
        checkAllField()
    });

    field.inputYear.addEventListener('input', function () {
        if (this.value !== 'null') {
            document.querySelector('.js--input-year').innerHTML = this.value
        }
        checkAllField()
    });

    field.inputCvv.addEventListener('input', function () {
        const value = this.value;
        if (value.length >= 3) {
            checkAllField()
        }
        this.value = value.substring(0, 3);
        document.querySelector('.js--input-cvv').innerHTML = value.substring(0, 3);
    });
    
    function checkAllField() {
        let valid = false;
        for (let key in field) {
            valid = field[key].value.length !== 0;
        }
        if (valid) {
            document.querySelector('.js--submit').disabled = false;
        } else {
            document.querySelector('.js--submit').disabled = true;
        }
    }
};




formValidate({
    inputNumber: document.querySelector('.js--number'),
    inputHolderName: document.querySelector('.js--holder-name'),
    inputMonth: document.querySelector('.js--month'),
    inputYear: document.querySelector('.js--year'),
    inputCvv: document.querySelector('.js--cvv')
});

