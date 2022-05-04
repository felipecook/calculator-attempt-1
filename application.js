function add(numberA, numberB) {

  return numberA + numberB;

  
}

function subtract(numberA, numberB) {
  return numberA - numberB;
}

function multiply(numberA, numberB) {
  return numberA * numberB;
}

function divide(numberA, numberB) {
  return numberA / numberB;
}

function operate(operator, numberA, numberB) {
  switch (operator) {
    case '+':
      return add(numberA, numberB);
  
    case '-':
      return subtract(numberA, numberB);

    case '/':
      return divide(numberA, numberB);

    case '*':
      return multiply(numberA, numberB);

    default:
      alert('You entered an operator that is not recognized by this calculator, please use +, -, *, or /')
      break;
  }
  
}