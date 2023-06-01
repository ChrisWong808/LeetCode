/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
      const stack = [];

  for (let token of tokens) {
    if (isOperator(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = performOperation(operand1, operand2, token);
      stack.push(result);
    } else {
      stack.push(parseInt(token, 10));
    }
  }

  return stack.pop();
}

function isOperator(token) {
  return token === '+' || token === '-' || token === '*' || token === '/';
}

function performOperation(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return Math.trunc(operand1 / operand2);
  }
};