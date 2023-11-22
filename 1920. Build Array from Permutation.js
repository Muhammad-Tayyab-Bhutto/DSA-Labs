const buildArray = function(nums) {
    return nums.map((n, i, arr) => arr[n]);
};