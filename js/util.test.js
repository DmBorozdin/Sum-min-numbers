import {getSumTwoMinElem, getArray} from "./util.js";

describe(`Test getSumTwoMinElem`, () => {
    let testArr;

    it(`Function should return "17" when received arr [7, 14, 19, 15, 10, 80]`, () => {
        testArr =  [7, 14, 19, 15, 10, 80];
        expect(getSumTwoMinElem(testArr)).toBe(17);
    });

    it(`Function should return "-9" when received arr [4, 3, 19, 492, -10, 1] with negative number`, () => {
        testArr =  [4, 3, 19, 492, -10, 1];
        expect(getSumTwoMinElem(testArr)).toBe(-9);
    });

    it(`Function should return "element*2" when received arr [4, 3, 19, 492, -10, 1] with 2 same minimum numbers`, () => {
        testArr =  [4, 1, 19, 492, 10, 1];
        expect(getSumTwoMinElem(testArr)).toBe(2);
    });

    it(`Function should return "null" when received empty arr `, () => {
        testArr =  [];
        expect(getSumTwoMinElem(testArr)).toBe(null);
    });

    it(`Function should return element when received array with 1 element `, () => {
        testArr =  [2];
        expect(getSumTwoMinElem(testArr)).toBe(2);
    });
});

describe(`Test getArray`, () => {
    let testStr;

    it(`Function should return [7, 14, 19, 15, 10, 80] when received str "7, 14, 19, 15, 10, 80"`, () => {
        testStr =  `7, 14, 19, 15, 10, 80`;
        expect(getArray(testStr)).toEqual([7, 14, 19, 15, 10, 80]);
    });

    it(`Function should return [14, 19, 15, 10] when received str " , 14, 19, 15, 10, " with empty element at the beginning and end of the string`, () => {
        testStr =  ` , 14, 19, 15, 10, `;
        expect(getArray(testStr)).toEqual([14, 19, 15, 10]);
    });

    it(`Function should return [19, 7, 10, 5] when received str " ,14 k, 19 ,k 1 le, 7, 10,5, " with elements containing letters`, () => {
        testStr =  ` ,14 k, 19 ,k 1 le, 7, 10,5, `;
        expect(getArray(testStr)).toEqual([19, 7, 10, 5]);
    });

    it(`Function should delete space between numbers`, () => {
        testStr =  `1 4,19,1,2 5 3,10,5,`;
        expect(getArray(testStr)).toEqual([14, 19, 1, 253, 10, 5]);
    });
});