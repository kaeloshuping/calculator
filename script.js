// this function takes 2 numbers as arguments and return the addition thereof
function add(num1, num2) {
    return Number(num1) + Number(num2); 
};

// this function takes 2 numbers as arguments and return the subtraction thereof
function subtract(num1, num2) {
    return Number(num1) - Number(num2); 
};

// this function takes 2 numbers as arguments and return the multiplication thereof
function multiply(num1, num2) {
    return Number(num1) * Number(num2); 
};

// this function takes 2 numbers as arguments and return the division thereof
function divide(num1, num2) {
    return Number(num1) / Number(num2); 
};

// this function takes a button as a parameter and changes the math "symbol" to the selected symbol
function changeSymbol(button) {
    operator = button.innerHTML;
    return operator;
};

// thish function takes a button and an operator as parameters and depending the condition 
// of the operator updates either the first or second number
function getNumbers(operator, button) {
    if (operator === "") {
        firstNumber += button.innerHTML;
        console.log(firstNumber);
    } else {
        secondNumber += button.innerHTML;
        console.log(secondNumber);
    };
};

// this functions takes 2 numbers and a math operator which it performs calculations on
function process(firstDigit, operator, secondDigit) {
    if (operator === "+") {
        return add(firstDigit, secondDigit);
    }
    else if (operator === "-") {
        return subtract(firstDigit, secondDigit);
    }
    else if (operator === "*") {
        return multiply(firstDigit, secondDigit);
    }
    else if (operator === "/") {
        return divide(firstDigit, secondDigit);
    };
};

let numbers = document.querySelectorAll(".number");
let mathOperators = document.querySelectorAll(".basic-math-operations");
let equalSign = document.getElementById("equal-sign");

let operator = "";
let symbolIsChanged = false;

let firstNumber = "";
let secondNumber = "";

// this event listener listens for a click event on one of the math operators buttons 
// and updates the symbol varibale accordingly
mathOperators.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
            operator = changeSymbol(button);
            console.log(operator);
        } else {
            firstNumber = process(firstNumber, operator, secondNumber);
            operator = changeSymbol(button);
            secondNumber = "";
            console.log(firstNumber);
            console.log(operator);
        };
    });
});

// this event listener listens for a click event and depending on whether 
// the symbol has beel selected, gets the numbers to be calculated
numbers.forEach((button) => {
    button.addEventListener("click", () => {
        getNumbers(operator, button);
    });
});

// this listener listens for a "click" event on the equal sign and processes the 
// calculations while resetting the first and second number for a fresh restart
equalSign.addEventListener("click", () => {
    console.log(process(firstNumber, operator, secondNumber));
    operator = "";
    firstNumber = "";
    secondNumber = "";
});