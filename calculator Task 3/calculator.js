// Get elements
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

// Operation functions
function calculate(operator) {
  const val1 = parseFloat(num1.value);
  const val2 = parseFloat(num2.value);

  if (isNaN(val1) || isNaN(val2)) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  let res;
  switch (operator) {
    case '+':
      res = val1 + val2;
      break;
    case '-':
      res = val1 - val2;
      break;
    case '*':
      res = val1 * val2;
      break;
    case '/':
      if (val2 === 0) {
        result.textContent = "Cannot divide by zero.";
        return;
      }
      res = val1 / val2;
      break;
  }

  result.textContent = `Result: ${res}`;
}

// Button event listeners
document.getElementById("addBtn").addEventListener("click", () => calculate('+'));
document.getElementById("subBtn").addEventListener("click", () => calculate('-'));
document.getElementById("mulBtn").addEventListener("click", () => calculate('*'));
document.getElementById("divBtn").addEventListener("click", () => calculate('/'));
