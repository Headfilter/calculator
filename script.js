let num1 = '';
let operator = null;
let num2 = '';

const display = document.querySelector(".calcScreen");
const buttons = document.querySelectorAll(".button")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;
        const op = button.dataset.operator;
        const action = button.dataset.action;
        if (!action && !op) {
            if (num1 === '0') num1 = value;
            else num1 += value;
            updateDisplay(num1);
        }
        if (op) {
            operator = op;
            num2 = num1;
            num1 = '';
        }
        if (button.id === 'equals') {
            const result = calculate(parseFloat(num2), parseFloat(num1), operator);
            updateDisplay(result);
            num1 = result;
        }
        if (action === "clear") {
            num1 = '0';
            num2 = '';
            operator = null;
            updateDisplay(num1);
        }
        if (action === "delete") {
            if(num1.length > 0) {
                num1 = num1.slice(0, -1);
            }
            updateDisplay(num1);
        }
    });
});

function updateDisplay(val) {
    display.innerText = val;
}

function calculate(x, y, op) {
    if(op === '+') return x + y;
    if(op === '-') return x - y;
    if(op === '*') return x * y;
    if(op === '/') return x / y;
};
