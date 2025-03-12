const divide = (a, b) => {
    if (b === 0) {
        return 'Error: Division by zero is not allowed.';
    }
    return a / b;
};

const square = (x) => {
    return x * x;
};

const add = (a, b) => {
    return a + b;
};

module.exports = { divide, square, add };
