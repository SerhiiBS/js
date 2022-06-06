document.addEventListener('DOMContentLoaded', function () {
    const letters = document.querySelector('.js--holder-name');
    
   letters.addEventListener('keydown', function(event) {
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        } else {
            if (event.keyCode >= 48 && event.keyCode <= 57) {
                event.preventDefault();
            }
        }
    });
});