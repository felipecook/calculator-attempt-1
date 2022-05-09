function add(numberA, numberB) {
  const answer = parseInt(numberA) + parseInt(numberB)

  return answer;

  
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


const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals__operator");

const display = document.querySelector(".display__text");

equals.addEventListener('click', equate);

function equate (){
  const equation = display.innerHTML.trim();
  
  console.log(equation);
  console.log(equation.length)

  if (equation.length > 5) {

  } else {
    const answer = '';
    console.log(equation[2]);
    console.log(operate(equation[2], equation[0], equation[4]));
    // answer = operate(equation[2], equation[0], equation[4]);
    display.innerHTML = operate(equation[2], equation[0], equation[4]);
  }


}


function addToDisplay(itemToAdd) {
  display.innerHTML = display.innerHTML + " " + itemToAdd;
}

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    addToDisplay(operator.innerHTML);
  })
})

numbers.forEach(number => {
  number.addEventListener('click', () => {
    addToDisplay(number.innerHTML);

  })
})



