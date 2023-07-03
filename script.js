// this function takes 2 numbers as arguments and return the addition thereof
function add(num1, num2) {
    return Number((Number(num1) + Number(num2)).toFixed(7)); 
};

// this function takes 2 numbers as arguments and return the subtraction thereof
function subtract(num1, num2) {
    return Number((Number(num1) - Number(num2)).toFixed(7)); 
};

// this function takes 2 numbers as arguments and return the multiplication thereof
function multiply(num1, num2) {
    return Number((Number(num1) * Number(num2)).toFixed(7)); 
};

// this function takes 2 numbers as arguments and return the division thereof
function divide(num1, num2) {
    console.log(typeof(Number((Number(num1) / Number(num2)).toFixed(7))))
    return Number((Number(num1) / Number(num2)).toFixed(7)); 
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
        updateDisplay();
    } else {
        secondNumber += button.innerHTML;
        updateDisplay();
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

function showNumbers() {
    let clickedButtons = ""
    clickedButtons += firstNumber + operator + secondNumber;
    displaySub.innerHTML = clickedButtons;
    return clickedButtons;
};

function updateDisplay() {
    if (equalIsClicked) {
        displayMain.innerHTML = process(firstNumber, operator, secondNumber);
        displayMain.style.alignSelf = "end";
        displaySub.innerHTML = "";
        equalIsClicked = false;
    }
    else if (displayMain.innerHTML != "") {
        displaySub.innerHTML = secondNumber;
    }
    else {
        showNumbers();
    };
};

let numbers = document.querySelectorAll(".number");
let mathOperators = document.querySelectorAll(".basic-math-operations");
let equalSign = document.getElementById("equal-sign");
let equalIsClicked = false;

let operators = ["+", "-", "*", "/"];
let operator = "";
let operatorIsClicked = false;

let firstNumber = "";
let secondNumber = "";

let displayContainer = document.getElementById("display");
let displayMain = document.getElementById("display-main");
let displaySub = document.getElementById("display-sub");

let allClear = document.getElementById("all-clear");
let clearCharacter = document.getElementById("clear-character");

let lastCharacter = -1

// this event listener listens for a click event on one of the math operators buttons 
// and updates the symbol varibale accordingly
mathOperators.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
            operator = changeSymbol(button);
            updateDisplay();
            operatorIsClicked = true;
        } else {
            firstNumber = process(firstNumber, operator, secondNumber);
            operator = changeSymbol(button);
            secondNumber = "";
            displayMain.innerHTML = firstNumber + operator;
            displaySub.innerHTML = secondNumber;
            operatorIsClicked = true;
            // updateDisplay();
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
    equalIsClicked = true;
    updateDisplay();
    operator = "";
    firstNumber = "";
    secondNumber = "";
});

allClear.addEventListener("click", () => {
    displayMain.innerHTML = "";
    displaySub.innerHTML = "";
    operator = "";
    firstNumber = "";
    secondNumber = "";
});

clearCharacter.addEventListener("click", () => {
    let characters = showNumbers();
    erase(characters, operatorIsClicked);
});

function erase(string, operatorCondition) {
    let stringArray = string.split("");
    // console.log(stringArray[stringArray.length - 1]);
    // console.log(operators.includes(stringArray[stringArray.length - 1]))
    if (operators.includes(stringArray[stringArray.length - 1])) {
        displaySub.innerHTML = stringArray.slice(0, lastCharacter).join("");
        operator = "";
        operatorIsClicked = false;
        lastCharacter -= 1;
    }
    else if (operatorCondition) {
        if (displayMain.innerHTML != "") {
            secondNumber = secondNumber.slice(0, secondNumber.length - 1);
            displaySub.innerHTML = secondNumber;
            lastCharacter -= 1;
        } else {
            displaySub.innerHTML  = stringArray.slice(0, lastCharacter).join("");
            secondNumber = secondNumber.slice(0, secondNumber.length - 1);
            lastCharacter -= 1;
        }
    } else {
        firstNumber = stringArray.slice(0, lastCharacter).join("");
        displaySub.innerHTML = firstNumber;
        lastCharacter -= 1;
    };
    lastCharacter = -1
};
