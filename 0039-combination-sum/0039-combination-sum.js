/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const result = [];
  
  function backtrack(combination, start, currentSum) {
    if (currentSum === target) {
      result.push([...combination]); // Add a copy of the combination to the result
      return;
    }
    
    if (currentSum > target) {
      return;
    }
    
    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]); // Add the current candidate to the combination
      backtrack(combination, i, currentSum + candidates[i]); // Recursively call backtrack with the updated parameters
      combination.pop(); // Remove the last candidate from the combination to try the next one
    }
  }
  
  backtrack([], 0, 0); // Start the backtracking process with an empty combination, starting from the first candidate
    
  return result;
}
