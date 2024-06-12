let calculator = {
  numberOne: [],
  numberTwo: [],
  operator: '',
  result: '' 
};

let buttonNumbers = document.querySelectorAll('.button-number');
buttonNumbers.forEach((button) => button.addEventListener('click', populateNumbers))

function populateNumberOne(event) {
  //remove leading 0 from the numberOne
  if (calculator.numberOne.length > 0 && calculator.numberOne[0] == '0'){
    calculator.numberOne.splice(0, calculator.numberOne.length);
    calculator.numberOne.push(event.target.textContent);
  } else {
  calculator.numberOne.push(event.target.textContent);
  }
};

function populateNumberTwo(event) {
  //remove leading 0 from the numberTwo
  if (calculator.numberTwo.length > 0 && calculator.numberTwo[0] == '0'){
    calculator.numberTwo.splice(0, calculator.numberTwo.length);
    calculator.numberTwo.push(event.target.textContent);
  } else {
  calculator.numberTwo.push(event.target.textContent);
  }
};

function populateNumbers(event) {
  if (calculator.numberOne.length > 0 && calculator.numberTwo.length > 0 && calculator.operator.length > 0 &&
    calculator.result.toString().split('').length > 0) {
    clearDisplay(event);
  }
  if (calculator.result.toString().split('').length > 0) {
    clearDisplay(event);
  };
  if (calculator.operator.length < 1) {
    populateNumberOne(event);
  } else {
    populateNumberTwo(event);
  }
  updateDisplay(event);
}

let buttonDot = document.querySelector('.button-dot');
buttonDot.addEventListener('click', populateNumbers);

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
      if(calculator.numberTwo.join('') == '0') {
        calculator.result = 'Divide by 0? At this point, you can only impress me.';
        break;
      }
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
  //round long decimals to 6 digits
  if (calculator.result.toString().split('').includes('.')) {
    firstIndexAfterDot = calculator.result.toString().split('').indexOf('.') + 1;
    decimalsAfterDot = calculator.result.toString().split('').slice(firstIndexAfterDot);
    if(decimalsAfterDot.length > 6) {
      calculator.result = calculator.result.toFixed(6);
    }
  };
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
