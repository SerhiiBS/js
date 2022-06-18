function formValidate(field) {
    field.addEventListener('input', function () {
        const value = this.value;

        const bigLetter = function () {
            if (value.match(/[A-ZА-ЯЁ]/)) {
                document.querySelector('.big-letter').classList.add('valid')
                document.querySelector('.big-letter').classList.remove('invalid')
            } else {
                document.querySelector('.big-letter').classList.add('invalid')
                document.querySelector('.big-letter').classList.remove('valid')
            }
        }

        const oneNumber = function () {
            if (value.match(/\d/)) {
                document.querySelector('.one-nomber').classList.add('valid')
                document.querySelector('.one-nomber').classList.remove('invalid')
            } else {
                document.querySelector('.one-nomber').classList.add('invalid')
                document.querySelector('.one-nomber').classList.remove('valid')
            }
        }

        const onePunctuation = function () {
            if (value.match(/[!@#$%ˆ&/*()_+=,\s\-\`\.\\]/)) {
                document.querySelector('.one-punctuation').classList.add('valid')
                document.querySelector('.one-punctuation').classList.remove('invalid')
            } else {
                document.querySelector('.one-punctuation').classList.add('invalid')
                document.querySelector('.one-punctuation').classList.remove('valid')
            }
        }

        const minLength = function () {
            if (value.length >= 8) {
                document.querySelector('.min-length').classList.add('valid')
                document.querySelector('.one-punctuation').classList.remove('invalid')
            } else {
                document.querySelector('.min-length').classList.add('invalid')
                document.querySelector('.min-length').classList.remove('valid')
            }
        }
        bigLetter();
        oneNumber();
        onePunctuation();
        minLength();
    });
}

formValidate(field = document.querySelector('.password'))
