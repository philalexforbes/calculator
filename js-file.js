const display = document.querySelector('#display');
const backSpaceBtn = document.querySelector('#backSpacBtn');
const clearBtn = document.querySelector('#clearBtn');
const equalBtn = document.querySelector('#equalBtn');
const decimalBtn = document.querySelector('#decimalBtn');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');

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
        return 'Oh no! The fabric of the universe!';
    }
    return num1 / num2;
}

const getFirstNumber = function(){
    let firstNumber = '';
    numberBtns.forEach((numberBtn) => {
        numberBtn.addEventListener('click', (e) => {
            firstNumber += '' + e.target.value;
            display.textContent = firstNumber;
            console.log(`firstNumber: ${firstNumber}`);
        });
    });
    return firstNumber = Number(firstNumber);
}

const getSecondNumber = function(){
    let secondNumber = '';
    numberBtns.forEach((numberBtn) => {
        numberBtn.addEventListener('click', (e) => {
            secondNumber += '' + e.target.value;
            display.textContent = secondNumber;
            console.log(`secondNumber: ${secondNumber}`);
        });
    });
    return secondNumber = Number(secondNumber);
}

const getOperator = function() {
    let operator = '';
    operatorBtns.forEach((operatorBtn) => {
        operatorBtn.addEventListener('click', (e) => {
            operator = e.target.value;
            console.log(operator);
            display.textContent = operator;
        });
    });
    return operator; 
}

const compute = function(number1, operator, number2 ) {
    let computedValue = 0;
    equalBtn.addEventListener('click', () => {
        if (operator === '+') {
            computedValue = add(number1, number2);
        } else if (operator === '-'){
                computedValue = subtract(number1, number2);
        } else if (operator === '*'){
                computedValue = multiply(number1, number2);
        } else if (operator === '/'){
                computedValue = divide(number1, number2);
        }
        display.textContent = computedValue;
    });
}

const operate = function() {
    let number1 = getFirstNumber();
    let operator = getOperator();
    let number2 = getSecondNumber();
    compute(number1, operator, number2);
}


operate();