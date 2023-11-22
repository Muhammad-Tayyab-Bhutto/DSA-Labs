// You are given an integer array nums and an array queries where queries[i] = [vali, indexi].

// For each query i, first, apply nums[indexi] = nums[indexi] + vali, then print the sum of the even values of nums.

// Return an integer array answer where answer[i] is the answer to the ith query.

// Input: nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
// Output: [8,6,2,4]
// Explanation: At the beginning, the array is [1,2,3,4].
// After adding 1 to nums[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
// After adding -3 to nums[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
// After adding -4 to nums[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
// After adding 2 to nums[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.

var sumEvenAfterQueries = function(nums, queries) {
    let evenSum = 0, n = queries.length;
    // calculate the sum of all even numbers
    nums.forEach(element => {
        if (element % 2 == 0) {
            evenSum += element;
        }
    });
    let ans = new Array(n);
    for (let i = 0; i < n; i++) {
        let val = queries[i][0], idx = queries[i][1];
        // if original nums[idx] is even, then we deduct it from evenSum
        if (nums[idx] % 2 == 0) {
            evenSum -= nums[idx];
        }
        // in-place update nums
        nums[idx] += val;
        // check if we need to update evenSum for the new value
        if (nums[idx] % 2 == 0) {
            evenSum += nums[idx];
        }
        // then we have evenSum after this query, push it to ans 
        ans[i] = evenSum;
    }
    return ans;
    
};        

nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
console.log('\r', sumEvenAfterQueries(nums, queries))