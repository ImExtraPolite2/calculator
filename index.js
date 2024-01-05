const addition = (num1, num2) => {
  return Number(num1) + Number(num2);
}

const subtraction = (num1, num2) => {
  return num1 - num2;
}

const multiplication = (num1, num2) => {
  return num1 * num2;
}

const division = (num1, num2) => {
  return num1 / num2;
}

const operate = (num1, num2, operator) => {
  if (operator === '+') {
    console.log(addition(num1, num2));
  } else if (operator === '-') {
    console.log(subtraction(num1, num2));
  } else if (operator === '*') {
    console.log(multiplication(num1, num2));
  } else if (operator === '/') {
    console.log(division(num1, num2));
  } else {
    console.log('Wrong operator!');
  }
}

const populateDisplay = () => {
  const allNumbers = document.querySelectorAll('.number-button');
  const allOperators = document.querySelectorAll('.operator-button');
  const displayFirst = document.querySelector('.first-number');
  const displayOperator = document.querySelector('.operator');
  const displaySecond = document.querySelector('second-number');

  allNumbers.forEach(number => {
    number.addEventListener('click', () => {
      expression += number.textContent;
      console.log(expression);
    });
  });

  allOperators.forEach(operator => {
    operator.addEventListener('click', () => {
      expression += operator.textContent;
      console.log(expression);
    });
  });

  if (expression.includes('+', '-', '/', '*')) {
    console.log(true);
  } else {
    console.log(false);
  }

  clearDisplay();
}

const clearDisplay = () => {
  const clear = document.querySelector('.clear');
  const display = document.querySelector('.display');

  clear.addEventListener('click', () => {
    expression = '';
  });
}

let expression = '';
populateDisplay();

// let firstNum = prompt('Enter first number: ');
// let secondNum = prompt('Enter second number: ');
// let operator = prompt('Enter operator: ');

// operate(firstNum, secondNum, operator);