import {onSumHandle} from "./util.js"

const inputField = document.querySelector('.form__input');
const sumButton = document.querySelector('.form__button');

sumButton.addEventListener('click', () => {
    onSumHandle(inputField.value);
    inputField.value = '';
});

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
        onSumHandle(inputField.value);
        inputField.value = '';
    }
});

export {onSumHandle};