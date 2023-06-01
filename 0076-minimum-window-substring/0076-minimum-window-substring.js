/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // Create a frequency map of characters in string t
  const tFreqMap = new Map();
  for (const char of t) {
    tFreqMap.set(char, (tFreqMap.get(char) || 0) + 1);
  }

  let left = 0; // Left pointer of the window
  let minWindow = ""; // Minimum window substring
  let minWindowLength = Infinity; // Minimum window length

  let requiredChars = tFreqMap.size; // Count of characters required to be present in the window
  let windowFreqMap = new Map(); // Frequency map of characters in the current window

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // Add the character to the window frequency map
    windowFreqMap.set(char, (windowFreqMap.get(char) || 0) + 1);

    // Check if the current character is required in the window
    if (tFreqMap.has(char) && tFreqMap.get(char) === windowFreqMap.get(char)) {
      requiredChars--;
    }

    // Try to minimize the window size by moving the left pointer
    while (requiredChars === 0) {
      // Update the minimum window substring if a smaller length is found
      if (right - left + 1 < minWindowLength) {
        minWindowLength = right - left + 1;
        minWindow = s.substring(left, right + 1);
      }

      // Remove the leftmost character from the window
      const leftChar = s[left];
      windowFreqMap.set(leftChar, windowFreqMap.get(leftChar) - 1);

      // Check if the removal affects the required characters count
      if (
        tFreqMap.has(leftChar) &&
        tFreqMap.get(leftChar) > windowFreqMap.get(leftChar)
      ) {
        requiredChars++;
      }

      left++; // Move the left pointer to the right
    }
  }

  return minWindow;
};