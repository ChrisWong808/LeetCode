/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var dup = false;
    var tracker = {};
    for (let i = 0; i < nums.length; i++) {
        if (tracker[nums[i]] === undefined) {
            tracker[nums[i]] = 1
            }
        else {
            dup = true;
        }
    }
    return dup;
};