const display = document.querySelector('#display');
const backSpaceBtn = document.querySelector('#backSpaceBtn');
const clearBtn = document.querySelector('#clearBtn');
const equalBtn = document.querySelector('#equalBtn');
const decimalBtn = document.querySelector('#decimalBtn');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');

let currentNumber = '';
let previousNumber = '';
let operator = '';

numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', (e) => {
        displayNumber(e.target.value);
        display.textContent = currentNumber;
    });
});

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', (e) => {
        getOperator(e.target.value);
        display.textContent = operator;
    });
});

backSpaceBtn.addEventListener('click', () => {
    backSpace();
});

clearBtn.addEventListener('click', ()=> {
    clearScreen();
});

equalBtn.addEventListener('click', ()=> {
    compute();
});

decimalBtn.addEventListener('click', ()=>{
    decimalLogic();
});

const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    if(num2 === 0){
        return 'Oh no!';
    }
    return num1 / num2;
}

const displayNumber = function (num) {
    currentNumber += num;
}

const clearScreen = function () {
    display.textContent = '0';
    currentNumber = '';
    operator = '';
    previousNumber = '';
}

const getOperator = function(op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

const backSpace = function() {
    currentNumber = currentNumber.slice(0,-1);
    display.textContent = (display.textContent.slice(0,-1));
    if (currentNumber === ''){
        display.textContent = '0';
    } else if(currentNumber && previousNumber !== '') {

    }
}

const decimalLogic = function() {
    if (currentNumber.includes('.')) {
        currentNumber = currentNumber;
    } else {
        currentNumber += '.'
    }
}

const compute = function() {
    let number1 = Number(previousNumber);
    let number2 = Number(currentNumber);
    let computedValue = 0;
    if (operator === '+') {
        computedValue = add(number1, number2);
    } else if (operator === '-'){
        computedValue = subtract(number1, number2);
    } else if (operator === '*'){
        computedValue = multiply(number1, number2);
    } else if (operator === '/'){
        computedValue = divide(number1, number2);
    }
    computedValue = Math.round(computedValue * 100000) / 100000;
    display.textContent = computedValue;
}

const operate = function() {
    compute();
}


operate();