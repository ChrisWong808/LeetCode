/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the string is empty or has only one character (which is considered a palindrome)
  if (s.length <= 1) {
    return true;
  }

  // Check if the string is a palindrome
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }

  return true;
}





