/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
 const totalSum = nums.reduce((sum, num) => sum + num, 0);
  
  // If the total sum is odd, it is not possible to partition into equal sum subsets
  if (totalSum % 2 !== 0) {
    return false;
  }
  
  const targetSum = totalSum / 2;
  const dp = new Array(targetSum + 1).fill(false);
  dp[0] = true;
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = targetSum; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }
  
  return dp[targetSum];
};