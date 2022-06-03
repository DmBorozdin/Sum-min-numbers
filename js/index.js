const inputField = document.querySelector('.form__input');
const sumButton = document.querySelector('.form__button');

const getArray = (str) => {
    const strWithoutSpace = str.replace(/\s/g, '');
    const arr = strWithoutSpace.split(',');
    const filterArr = arr.filter((item) => !Number.isNaN(Number(item)) && item !== '').map((str) => Number(str));
    return filterArr;
};

const getSumTwoMinElem = (arr) => {
    let sum = null;

    if (arr.length > 0) {
        const arrayOfSortedNumber = arr.slice().sort((a, b) => a - b);
        sum = arrayOfSortedNumber.length > 1 ? arrayOfSortedNumber[0] + arrayOfSortedNumber[1] : arrayOfSortedNumber[0];
    }
    
    return sum;
};

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
