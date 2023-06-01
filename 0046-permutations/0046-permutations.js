/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
      const result = [];

  function backtrack(current, remaining) {
    if (remaining.length === 0) {
      result.push(current.slice()); // Make a copy of current and add it to the result
    } else {
      for (let i = 0; i < remaining.length; i++) {
        const next = remaining[i];
        current.push(next); // Add next to the current permutation
        remaining.splice(i, 1); // Remove next from the remaining elements
        backtrack(current, remaining); // Recursively generate permutations
        remaining.splice(i, 0, next); // Restore next to the remaining elements
        current.pop(); // Remove next from the current permutation
      }
    }
  }

  backtrack([], nums);
  return result;
};