var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;

    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[start] === target) {
            return start;
        } else if (nums[end] === target) {
            return end;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return -1;
};
