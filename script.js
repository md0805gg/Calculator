let numberOne;
let numberTwo;
let operator;
let displayValue;

function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function operate(){
  switch (operator) {
    case '+':
      return add (numberOne, numberTwo);
    case '-':
      return subtract (numberOne, numberTwo);
    case '*':
      return multiply (numberOne, numberTwo);
    case '/':
      return divide (numberOne, numberTwo);
  }
}

buttonNumbers = document.querySelectorAll('.button-number');
buttonNumbers.forEach((button) => button.addEventListener('click', () => populateNumberOne()))

function populateNumberOne() {
  numberOne = event.target.textContent;
};

function populateNumbertwo() {
  numberTwo = event.target.textContent;
};

function updateDisplay () {
  return displayValue;
}


