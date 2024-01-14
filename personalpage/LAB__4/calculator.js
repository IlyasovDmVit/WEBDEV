document.addEventListener("DOMContentLoaded", function() {
    const screen = document.querySelector(".screen span");
    const digits = document.querySelectorAll(".digit");
    const operations = document.querySelectorAll(".operation");
    const brackets = document.querySelectorAll(".bracket");
    const equalBtn = document.querySelector(".result");
    const clearBtn = document.querySelector(".clear");
  
    let currentOperation = "";
  
    digits.forEach(digit => {
        digit.addEventListener("click", appendDigit);
    });
  
    operations.forEach(operation => {
        operation.addEventListener("click", setOperation);
    });
  
    brackets.forEach(bracket => {
        bracket.addEventListener("click", appendBracket);
    });
  
    equalBtn.addEventListener("click", calculate);
    clearBtn.addEventListener("click", clearScreen);
  
    function appendDigit() {
        screen.textContent += this.textContent;
    }
  
    function setOperation() {
        currentOperation = this.textContent;
        screen.textContent += currentOperation;
    }
  
    function appendBracket() {
        screen.textContent += this.textContent;
    }
    function calculate() {
        const expression = screen.textContent;
        let result;
      
        try {
          const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
          result = Function('return ' + sanitizedExpression)();
          screen.textContent = result;
        } catch (error) {
          screen.textContent = 'Error';
        }
      }
    function clearScreen() {
        screen.textContent = "";
        currentOperation = "";
    }
});