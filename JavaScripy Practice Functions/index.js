let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//params == ...

function getArr(...arr) {
    for (const item of arr) {
        return item;
    }
}

console.log(getArr(arr));

// multiple parametrs

function getArrayItems(a, b, ...arr1) {

    let sum1 = a + b;
    for (const item1 of arr1) {
        sum1 += item1;
    }

    return sum1;
}


// Nese elemey istedim alinmadi

console.log(getArrayItems(2,3,...arr));

function getArrayItems2(a2, b2, ...arr2) {
    
    for (const item2 of arr2) {
        return a2, b2, item2;
    }    
}

console.log(getArrayItems2(3,4,...arr));

//Precursions

function aboveFive(n){
    return n > 5
}

function belowFive(n){
    return n < 5
}

function divisibleBy3(n){
    return  n % 3 == 0
}

function calcSumByConds(arr, precursion){
    let sumUp = 0;
    for (const item of arr) {
        if (precursion(item)) {
            sumUp += item;
        }
    }
    return sumUp;
}

function getNumByConds(arr, precursion){
    for (const item of arr) {
        if (precursion(item)) {
            return item;
        }
    }    
}

console.log(getNumByConds(arr, aboveFive));
console.log(getNumByConds(arr, belowFive));
console.log(getNumByConds(arr, divisibleBy3));

console.log(calcSumByConds(arr, aboveFive));
console.log(calcSumByConds(arr, belowFive));
console.log(calcSumByConds(arr, divisibleBy3));

//Precursion Power

let power = 3;

function powerNum(n){
    return Math.pow(n,power)
}

function customMapping(arr, precursion) {
    let newArr = [];
    for (const item of arr) {
        newArr.push(precursion(item));
    }
    return newArr;
}

console.log(customMapping(arr, powerNum));

// Math.Pow

let newArr = arr.map(i => i.Math.pow(i, 2))

console.log(newArr);

array.forEach((n,i) => {console.log(n + " " +i);});

