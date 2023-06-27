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
    symbol = button.innerHTML;
    return symbol;
};

// this function checks whether a symbol has been selected from the math operators
function checkSymbol() {
    if (symbol === "") {
        return false;
    } else {
        return true;
    };
};

let numbers = document.querySelectorAll(".number");
let mathOperators = document.querySelectorAll(".basic-math-operations");
let equalSign = document.getElementById("equal-sign");

let symbol = "";
let symbolIsChanged = false;

// this event listener listens for a click event on one of the math operators buttons 
// and updates the symbol varibale accordingly
mathOperators.forEach((button) => {
    button.addEventListener("click", () => {
        checkSymbol();
        symbol = changeSymbol(button);
        checkSymbol();
    });
});

equalSign.addEventListener("click", () => {
    
});
