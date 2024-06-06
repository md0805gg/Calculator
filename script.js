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

let buttonNumbers = document.querySelectorAll('.button-number');
buttonNumbers.forEach((button) => button.addEventListener('click', (event) => populateNumbers(event)))

function populateNumberOne(event) {
  calculator.numberOne.push(event.target.textContent);
};

function populateNumberTwo(event) {
  calculator.numberTwo.push(event.target.textContent);
};

function populateNumbers(event) {
  if (calculator.operator.length < 1) {
    populateNumberOne(event);
  } else {
    populateNumberTwo(event);
  }
  updateDisplay();
}

let buttonOperators = document.querySelectorAll('.button-operator');
buttonOperators.forEach((button) => button.addEventListener('click', (event) => populateOperator(event)));

function populateOperator(event) {
  if(calculator.numberOne.length < 1){
    return;
  } else {
    calculator.operator = event.target.textContent;
  };
  updateDisplay();
};

let calculatorDisplayUpper = document.querySelector('.display-upper');

function updateDisplay () {
  calculatorDisplayUpper.textContent = `${calculator.numberOne.join('')} ${calculator.operator}
  ${calculator.numberTwo.join('')}`;
}


