class FormElement {
    constructor(name, type, value) {

        this.name = name;
        this.type = type;
        this.value = value;
        this.input = document.createElement(this.name);
        this.form = document.querySelector('.js--create-form');
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}

class TextElement extends FormElement {
    create() {
        this.form.append( this.input);
        this.input.setAttribute('type', this.type);
        if (this.value !== undefined) {
            this.input.setAttribute('placeholder', this.value);
        }
    }
}
class CheckboxElement extends FormElement {
    create() {
        this.form.append(this.input);
        this.input.setAttribute('type', this.type);
        this.input.insertAdjacentHTML('afterend', `<label class="text">I agree all</label>`);
        if (this.value == 'checked') {
            this.input.setAttribute(this.value, 'true');
        }
    }
}
class ButtonElement extends FormElement {
    create () {
        this.form.append(this.input)
        this.input.innerHTML = this.value;
    }
}
const name = new TextElement('input', 'text', 'Your name');
const email = new TextElement('input', 'email', 'Your email');
const password = new TextElement('input', 'password', 'Your password');
const checkBox = new CheckboxElement('input', 'checkbox', '')
const button = new ButtonElement('button', 'button','Send');
name.create();
email.create();
password.create();
checkBox.create();
button.create();

