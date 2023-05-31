/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 1) {
        return nums[0]
        }
    var goal = nums.length/2
    var count = {}
    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]] === undefined) {
            count[nums[i]] = 1
            console.log(nums[i], 'was undefined')
            } else {
                console.log(nums[i], 'was NOT undefined')
                count[nums[i]] ++
                console.log('count', count)
                console.log('goal', goal)
                if (count[nums[i]] > goal){
                    console.log('goal reached')
                    return nums[i]
                    }
            }
    }
};