import {getSumTwoMinElem, getArray} from "./util.js"

const inputField = document.querySelector('.form__input');
const sumButton = document.querySelector('.form__button');

const onSumHandle = (str) => {
    const arrayOfNumber = getArray(str);
    const sumTwoMinElem = getSumTwoMinElem(arrayOfNumber);
    sumTwoMinElem !== null ? alert(`Сумма двух минимальных элементов массива = ${sumTwoMinElem}`) : alert(`Введите хотя бы одно число!`)
    inputField.value = '';
};

sumButton.addEventListener('click', () => onSumHandle(inputField.value));

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
        onSumHandle(inputField.value);
    }
});
