let num1 = 0;

let operator = 0;

let num2 = 0;

const add = function (x, y) {
    return x + y;
};

const subrtact = function (x, y) {
    return x - y;
};

const multiply = function (x, y) {
    return x * y;
};

const divide = function (x, y) {
    return x / y;
};

function operate(func, x, y) {
    return func(x, y);
};
