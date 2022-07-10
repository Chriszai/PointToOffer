var exchange = function(nums) {
    /*
        典型左右指针，
        左边是奇数则一直右移
        右边是偶数则一直左移
    */
    let lo = 0, hi = nums.length-1;
    while(lo<hi){
        //如果是奇数
        while(nums[lo]%2 == 1){
            lo++;
        }
        //如果是偶数，一直左移
        while(nums[hi]%2 == 0){
            hi--;
        }
        if(lo < hi){
            let temp = nums[lo];
            nums[lo] = nums[hi];
            nums[hi] = temp;
        }
    }
    return nums;
};
