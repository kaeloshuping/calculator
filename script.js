function add(num1, num2) {
    return Number(num1) + Number(num2); 
};

function subtract(num1, num2) {
    return Number(num1) - Number(num2); 
};

function multiply(num1, num2) {
    return Number(num1) * Number(num2); 
};

function divide(num1, num2) {
    return Number(num1) / Number(num2); 
};

function changeSymbol() {
    mathButtons.forEach((button) => {
        button.addEventListener("click", () => {
            symbol = button.innerHTML;
            console.log(process(2, symbol, 4));
        });
    });
};

function process(firstDigit, mathSymbol, secondDigit) {
    console.log(mathSymbol);
    if (mathSymbol === "+") {
        let result = add(firstDigit, secondDigit);
        return result;
    }
    else if (mathSymbol === "-") {
        let result = subtract(firstDigit, secondDigit);
        return result;
    }
    else if (mathSymbol === "*") {
        let result = multiply(firstDigit, secondDigit);
        return result;
    }
    else {
        let result = divide(firstDigit, secondDigit);
        return result;
    }
};

let firstNumber = 0
let secondNumber = 0
let symbol = ""

let mathButtons = document.querySelectorAll(".basic-math-operations");
let numbersButtons = document.querySelectorAll(".number");

changeSymbol();