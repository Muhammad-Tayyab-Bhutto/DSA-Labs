function smallerNumbersThanCurrent(nums: number[]): number[] {
    let result: number[] = [];
    let count: number;
    for (let i = 0; i < nums.length; i++){
        count = 0;
        for (let j = 0; j < nums.length; j++){
            if (nums[i] > nums[j]){
                count++;
            }
        }
        result[i] = count;
    }
    return result;
};