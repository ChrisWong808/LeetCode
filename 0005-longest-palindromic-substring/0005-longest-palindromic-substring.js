/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     let maxLength = 0; // Length of the longest palindromic substring found
  let start = 0; // Starting index of the longest palindromic substring

  // Helper function to expand around a center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // Adjust the left and right pointers because the last iteration didn't satisfy the condition
    left++;
    right--;

    // Check if the current palindrome is longer than the longest one found so far
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      start = left;
    }
  }

  // Iterate through each character as a potential center of a palindrome
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // For odd-length palindromes (e.g., "aba")
    expandAroundCenter(i, i + 1); // For even-length palindromes (e.g., "abba")
  }

  // Return the longest palindromic substring
  return s.slice(start, start + maxLength);
};