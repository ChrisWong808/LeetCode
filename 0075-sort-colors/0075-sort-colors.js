/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
     let low = 0;    // Pointer for 0's
  let mid = 0;    // Pointer for 1's
  let high = nums.length - 1;    // Pointer for 2's

  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap nums[mid] with nums[low]
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      // Swap nums[mid] with nums[high]
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
};