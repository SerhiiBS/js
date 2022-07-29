class createForm {
    _form = document.querySelector('.js--create-form');
    constructor() {

        this.input = function () {
            this._form.innerHTML = `<input type="text">`
        }
    }
}
createForm