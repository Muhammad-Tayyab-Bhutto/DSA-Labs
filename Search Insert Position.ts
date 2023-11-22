function searchInsert(nums: number[], target: number): number {
    for(let i = 0; i < nums.length; i++){
        // If target is found
        if (nums[i] == target){
            return i;
        }
        // If current array element
        // exceeds target
        else if (nums[i] > target){
            return i;
        }
    }
  
    // If all elements are smaller
    // than target
    return nums.length;
};