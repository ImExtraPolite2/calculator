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
  const equal = document.querySelector('.equal');
  let lengthAfterOperator = 0;

  allNumbers.forEach(number => {
    number.addEventListener('click', () => {
      expression += number.textContent;
    });
  });

  allOperators.forEach(operator => {
    operator.addEventListener('click', () => {
      expression += operator.textContent;

      if (expression.includes('+') || expression.includes('-') || expression.includes('*') || expression.includes('/')) {
        displayOperator.textContent = expression[expression.length - 1];
        displayFirst.textContent = expression.substring(0, expression.length - 1);

        for (let i = 0; i < expression.length; i++) {
          lengthAfterOperator++;
        }
      }
    });
  });

  equal.addEventListener('click', () => {
    displaySecond.textContent = expression.substring(lengthAfterOperator, expression.length);
  })

  clearDisplay();
}

const clearDisplay = () => {
  const clear = document.querySelector('.clear');
  const display = document.querySelector('.display');

  clear.addEventListener('click', () => {
    displayFirst.textContent = '';
    displayOperator.textContent = '';
    displaySecond.textContent = '';
    expression = '';
  });
}


const displayFirst = document.querySelector('.first-number');
const displayOperator = document.querySelector('.operator');
const displaySecond = document.querySelector('.second-number');
let expression = '';
populateDisplay();