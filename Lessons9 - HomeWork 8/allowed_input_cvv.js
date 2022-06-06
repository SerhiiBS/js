document.addEventListener('DOMContentLoaded', function () {
    const cvv = document.querySelector('.js--cvv');

   cvv.addEventListener('keydown', function(event) {
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||           
            (event.keyCode >= 35 && event.keyCode <= 39)) {         
            return;
        } else {
            if (event.keyCode < 48 || event.keyCode > 57) {
                event.preventDefault();
            }
        }
    });
});
