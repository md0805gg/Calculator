let calculator = {
  numberOne: [],
  numberTwo: [],
  operator: '',
  displayValue: '' 
};

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
      return add (calculator.numberOne, calculator.numberTwo);
    case '-':
      return subtract (calculator.numberOne, calculator.numberTwo);
    case '*':
      return multiply (calculator.numberOne, calculator.numberTwo);
    case '/':
      return divide (calculator.numberOne, calculator.numberTwo);
  }
}

buttonNumbers = document.querySelectorAll('.button-number');
buttonNumbers.forEach((button) => button.addEventListener('click', () => populateNumbers()))

function populateNumberOne() {
  calculator.numberOne.push(event.target.textContent);
};

function populateNumberTwo() {
  calculator.numberTwo.push(event.target.textContent);
};

function populateNumbers() {
  if (calculator.operator.length < 1) {
    populateNumberOne();
  } else {
    populateNumberTwo();
  }
}

function updateDisplay () {
  return displayValue;
}


