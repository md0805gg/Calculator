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
  updateDisplay();
}

let buttonOperators = document.querySelectorAll('.button-operator');
buttonOperators.forEach((button) => button.addEventListener('click', populateOperator));

function populateOperator(event) {
  if(calculator.numberOne.length < 1){
    return;
  } else {
    calculator.operator = event.target.textContent;
  };
  updateDisplay();
};

let buttonOperate = document.querySelector('.button-operate');
buttonOperate.addEventListener('click', operate)

function operate(){
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
  updateDisplay();
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

function updateDisplay () {
  calculatorDisplayUpper.textContent = `${calculator.numberOne.join('')} ${calculator.operator}
  ${calculator.numberTwo.join('')} = ${calculator.result}`;
}


