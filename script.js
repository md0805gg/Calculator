// 7 + 7 = 14 ; if i press number button, then it clear the result and populaes no2 - wrong

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
  if (calculator.numberOne.length > 0 && calculator.numberTwo.length > 0 && calculator.operator.length > 0 &&
    calculator.result.toString().split('').length > 0) {
    clearDisplay(event);
  }
  if (calculator.result.toString().split('').length > 0) {
    calculator.result = '';
  };
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
  //if operator is pressed wile two numbers and operator are provided, but operate button hasn'b been pushed yet,
  //it completes the calc and pushes the result to numberOne
  } else if (calculator.numberOne.length > 0 && calculator.numberTwo.length > 0 && calculator.operator.length > 0 &&
            calculator.result.length < 1){
    operate(event);
    calculator.numberOne.splice(0, calculator.numberOne.length);
    calculator.numberOne.push(calculator.result);
    calculator.operator = event.target.textContent;
    calculator.numberTwo.splice(0,calculator.numberTwo.length);
    calculator.result ='';
  } else if (calculator.numberOne.length < 1){
    return;
  } else {
    calculator.operator = event.target.textContent;
  };
  updateDisplay(event);
};

let buttonOperate = document.querySelector('.button-operate');
buttonOperate.addEventListener('click', operate)

function operate(event){
  //if operate button is pressed with only numberOne and operator provided, then numberTwo receives the
  //same value as numberOne. Then function continues normally.
  if (calculator.numberOne.length > 0 && calculator.numberTwo.length < 1 && calculator.operator.length > 0 &&
    calculator.result.length == 0) {
    calculator.numberTwo.push(calculator.numberOne); 
  };
  //If operate button is pressed with only numberOne provided, value is being populated as final result.
  if (calculator.numberOne.length > 0 && calculator.numberTwo.length < 1 && calculator.operator.length < 1 &&
    calculator.result.length == 0) {
    calculator.result = calculator.numberOne;
    updateDisplay(event);
    return;
    }
  //If operate button is pressed with all components provided, it continues the operation as if final reult
  //was numer one
  if (calculator.numberOne.length > 0 && calculator.numberTwo.length > 0 && calculator.operator.length > 0 &&
    calculator.result.toString().split('').length > 0) {
    calculator.numberOne.splice(0, calculator.numberOne.length);
    calculator.numberOne.push(calculator.result)
    calculator.result ='';
  };
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
