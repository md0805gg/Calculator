let calculator = {
  numberOne: [],
  numberTwo: [],
  operator: '',
  result: '' 
};

let buttonNumbers = document.querySelectorAll('.button-number');
buttonNumbers.forEach((button) => button.addEventListener('click', populateNumbers))

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
  updateDisplay(event);
}

let buttonOperators = document.querySelectorAll('.button-operator');
buttonOperators.forEach((button) => button.addEventListener('click', populateOperator));

function populateOperator(event) {
  //if operator is pressed upon finished calculation then populate number one with result, populate operator and 
  //clear all the other calculator properties
  if (calculator.result.toString().split('').length > 0) {
    calculator.numberOne.splice(0, calculator.numberOne.length);
    calculator.numberOne.push(calculator.result);
    calculator.operator = event.target.textContent;
    calculator.numberTwo.splice(0,calculator.numberTwo.length);
    calculator.result ='';
  }
    else if (calculator.numberOne.length < 1){
    return;
  } else {
    calculator.operator = event.target.textContent;
  };
  updateDisplay(event);
};

let buttonOperate = document.querySelector('.button-operate');
buttonOperate.addEventListener('click', operate)

function operate(event){
  switch (calculator.operator) {
    case '+':
      calculator.result = add (+calculator.numberOne.join(''), +calculator.numberTwo.join(''));
      break;
    case '-':
      calculator.result = subtract (+calculator.numberOne.join(''), +calculator.numberTwo.join(''));
      break;
    case '*':
      calculator.result = multiply (+calculator.numberOne.join(''), +calculator.numberTwo.join(''));
      break;
    case '/':
      calculator.result = divide (+calculator.numberOne.join(''), +calculator.numberTwo.join(''));
      break;
  }
  updateDisplay(event);
}

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

let calculatorDisplayUpper = document.querySelector('.display-upper');

function updateDisplay (event) {
  if (event.target.textContent == '='){
    calculatorDisplayUpper.textContent = `${calculator.numberOne.join('')} ${calculator.operator}
  ${calculator.numberTwo.join('')} = ${calculator.result}`;
  } else {
    calculatorDisplayUpper.textContent = `${calculator.numberOne.join('')} ${calculator.operator}
  ${calculator.numberTwo.join('')}`;
  };
};

let buttonClear = document.querySelector('.button-clear');
buttonClear.addEventListener('click', clearDisplay);

function clearDisplay (event){
  calculator.numberOne = [];
  calculator.numberTwo = [];
  calculator.operator = '';
  calculator.result = '';
  updateDisplay(event);
};
