var findRepeatNumber = function (nums) {
    var n = nums.length
    for (var i = 0; i < n; i++) {
        var k = nums[i];
        if (k < 0) k += n;
        if (nums[k] < 0) return k;
        nums[k] -= n;
    }

    return -1;
};