function isValid(s) {
  const stack = [];
  const openingBrackets = ['(', '{', '['];
  const closingBrackets = [')', '}', ']'];

  for (let i = 0; i < s.length; i++) {
    const currentChar = s.charAt(i);

    if (openingBrackets.includes(currentChar)) {
      stack.push(currentChar);
    } else if (closingBrackets.includes(currentChar)) {
      if (stack.length === 0) {
        return false;
      }

      const top = stack.pop();
      const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(currentChar)];

      if (top !== correspondingOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example usage:
// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([)]")); // false
// console.log(isValid("(())")); // true
