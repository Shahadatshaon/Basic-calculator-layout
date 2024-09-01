const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const equalsButton = document.getElementById('equals');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const numberButtons = document.querySelectorAll('.buttons button:not([id="clear"], [id="backspace"], [id="equals"], [id="add"], [id="subtract"], [id="multiply"], [id="divide"])');

let currentNumber = '';
let previousNumber = '';
let operator = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentNumber += button.textContent;
        display.value = currentNumber;
    });
});

addButton.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = 'add';
});

subtractButton.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = 'subtract';
});

multiplyButton.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = 'multiply';
});

divideButton.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = 'divide';
});

clearButton.addEventListener('click', () => {
    display.value ="";
    previousNumber ="";
    currentNumber ="";
    operator = "";
});    

backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0,-1);
    currentNumber ="";
});    

equalsButton.addEventListener('click', () => {
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    let result;

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 0;
    }

    display.value = result;
    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
});
