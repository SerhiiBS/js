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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/

$.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19",
    success: (response) => {
        $('.js--city').html(response.name)
        $('.js--temp').html(Math.round(response.main.temp) + '&degC')
        $('.js--pressure').html(response.main.pressure + ' hPa')
        $('.js--description').html(response.weather[0].description)
        $('.js--humidity').html(response.main.humidity + '%')
        $('.js--speed').html(Math.round(response.wind.speed * 3.6) + ' km/h')
        $('.js--deg').html((function () {
            if (response.wind.deg === 0) {
                return 'North'
            }
            if (response.wind.deg === 90) {
                return 'East'
            }
            if (response.wind.deg === 180) {
                return 'South'
            }
            if (response.wind.deg === 270) {
                return 'West'
            }
            if (response.wind.deg > 90 && response.wind.deg < 180) {
                return 'East/south'
            }
            if (response.wind.deg > 180 && response.wind.deg < 270) {
                return 'South/west'
            }
            if (response.wind.deg > 0 && response.wind.deg < 90) {
                return 'North/east'
            }
            if (response.wind.deg > 270 && response.wind.deg < 360) {
                return 'North/west'
            }

        }))
        $('.js--icon').html('<img src="http://openweathermap.org/img/w/' + response.weather[0].icon + '.png">');

    }
})
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