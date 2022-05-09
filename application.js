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
const clearOperator = document.querySelector("#clear__operator");

const display = document.querySelector(".display__text");

equals.addEventListener('click', equate);
clearOperator.addEventListener('click', clearCalculator);

function clearCalculator() {
  display.innerHTML = "";
}

function equate (){
  const equation = display.innerHTML.trim();
  
  // console.log(equation);
  // console.log(equation.length)

  if (equation.length > 5) {
    let flag = false;
    for (let index = 0; index < equation.length; index++) {
      const element = equation[index];
      if ((element === '+' || element === '-' || element === '/' || element === '*') && flag === true) {
        let firstNumber = 0;
        let secondNumber = 0;
        let operator = 0;
        
        for (let jindex = 0; jindex <= index; jindex++) {
          secondElement = equation[jindex]; 
          if (secondElement === '+' || secondElement === '-' || secondElement === '/' || secondElement === '*') {
            firstNumber = equation.slice(0, jindex);
            operator = equation[jindex];
            secondNumber = equation.slice(jindex + 1, index);
            firstNumber = trimExtra(firstNumber);
            secondNumber = trimExtra(secondNumber);

            console.log("The first number is: " +   parseInt(firstNumber));
            console.log("The second number is: " + secondNumber);
            console.log("The operator is: " + operator);
            console.log("The index is: " + index);

            display.innerHTML = operate(operator, firstNumber, secondNumber) + " " + equation.slice(index);

            break;
  
          }
          
        }

      }
      if(element === '+' || element === '-' || element === '/' || element === '*') {
        flag = true;
      }
      
      
    }

  } else {
    const answer = '';
    console.log(equation[2]);
    console.log(operate(equation[2], equation[0], equation[4]));
    // answer = operate(equation[2], equation[0], equation[4]);
    display.innerHTML = operate(equation[2], equation[0], equation[4]);
  }


}

function trimExtra(number) {
  number.trim();
  let substring = "";
  if (number.length > 1) {
    for (let index = 0; index < number.length; index++) {
      const element = number[index];
      if (Number.isInteger(parseInt(element))) {
        substring += element;
      }
      
    }
  }
  number = substring;
  return number;
  
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



