import timer from './modules/timer';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let deadline = '2020-07-25';
    sliders('.slider__item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    let modalState = {};
    forms(modalState);
    timer('.container1', deadline);
    mask('[name="user_phone"]');
})

