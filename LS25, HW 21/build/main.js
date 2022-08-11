/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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


})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=main.js.map