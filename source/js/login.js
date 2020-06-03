"use strict";

(function () {
    const forms = document.querySelectorAll('.form');
    const closeBtns = document.querySelectorAll('.close');

    closeBtns.forEach(function (btn) {
        btn.addEventListener('click', function (evt) {
            evt.preventDefault();
            forms.forEach(function (form) {
                form.style.display = "none";
            });
        });
    });
})();