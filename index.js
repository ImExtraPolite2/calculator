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
    return addition(num1, num2);
  } else if (operator === '-') {
    return subtraction(num1, num2);
  } else if (operator === '*') {
    return multiplication(num1, num2);
  } else if (operator === '/') {
    return division(num1, num2);
  } 
}

const populateDisplay = () => {
  const allNumbers = document.querySelectorAll('.number-button');
  const allOperators = document.querySelectorAll('.operator-button');
  const equal = document.querySelector('.equal');
  const display = document.querySelector('.display');
  const period = document.querySelector('.period');
  let lengthAfterOperator = 0;

  allNumbers.forEach(number => {
    number.addEventListener('click', () => {
      expression += number.textContent;
      display.textContent = expression;
    });
  });

  period.addEventListener('click', () => {
    expression += period.textContent;
    display.textContent = expression;
  })

  allOperators.forEach(operator => {
    operator.addEventListener('click', () => {
      expression += operator.textContent;
      display.textContent = expression;

      if (expression.includes('+') || expression.includes('-') || expression.includes('*') || expression.includes('/')) {
        displayOperator = expression[expression.length - 1];
        displayFirst = expression.substring(0, expression.length - 1);

        for (let i = 0; i < expression.length; i++) {
          lengthAfterOperator++;
        }
      }
    });
  });

  equal.addEventListener('click', () => {
    displaySecond = expression.substring(lengthAfterOperator, expression.length);
    display.textContent = operate(displayFirst, displaySecond, displayOperator);
    lengthAfterOperator = 0;
  });

  clearDisplay();
}

const clearDisplay = () => {
  const clear = document.querySelector('.clear');

  clear.addEventListener('click', () => {
    const display = document.querySelector('.display');
    displayFirst = '';
    displayOperator = '';
    displaySecond = '';
    display.textContent = '';
    expression = '';
  });
}

let displayFirst;
let displayOperator;
let displaySecond;
let sum;
let expression = '';
populateDisplay();