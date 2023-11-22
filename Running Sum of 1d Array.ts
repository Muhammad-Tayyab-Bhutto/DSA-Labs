function runningSum(nums: number[]): number[] {
    let res: number[] = [];

    for (let i = 0; i < nums.length; i++){
        res[i] = 0
        for (let j = 0; j <= i; j++){
            res[i] += nums[j]
        }
    }
    
    return res;
};
let arr: number[] = [1, 2, 3, 4]
console.log(runningSum(arr));