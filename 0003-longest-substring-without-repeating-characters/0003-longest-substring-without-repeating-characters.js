/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
      let maxLength = 0;
  let start = 0;
  let seen = {};

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    // If the current character is already seen in the substring, update the start pointer
    // to the next position after the last occurrence of the current character.
    if (seen[currentChar] !== undefined && seen[currentChar] >= start) {
      start = seen[currentChar] + 1;
    }

    // Store the index of the current character as the last occurrence in the seen object.
    seen[currentChar] = end;

    // Update the maximum length if the current substring is longer.
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};