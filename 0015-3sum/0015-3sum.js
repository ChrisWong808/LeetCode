/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
//2nd to last index because we are considering TRIPLETS, need at least 2 more nums for L+R
    if (i > 0 && nums[i] === nums[i - 1]) {
//check for dups, if dup then skip it to next iteration
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
	//skipping more dups 
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
//if sum = 0, move both pointers and skip dups. If < 0 move L, if > 0 move R. 
//both pointers cause need a “new” combo, and impossible to get 0 again w/o dup. 
  }

  return result;
}
