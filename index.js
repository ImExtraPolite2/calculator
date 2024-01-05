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

let firstNum = prompt('Enter first number: ');
let secondNum = prompt('Enter second number: ');
let operator = prompt('Enter operator: ');

operate(firstNum, secondNum, operator);