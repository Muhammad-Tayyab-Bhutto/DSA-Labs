function findMaxSumSubArray(arr) {

    let maxSum = arr[0]
    let currentSum = 0
    // iterate through the arr, store sub-problems result
    for (let i = 0; i < arr.length; i++) {
        //cumulating answers to the top

        //compare currentSum add current number 
        //with current number and store the maximum value
        currentSum = Math.max(arr[i], currentSum + arr[i])

        //compare maxSum with currentSum and store the greater value
        maxSum = Math.max(currentSum, maxSum)

    }
    return maxSum
}
var arr = [1, 7, -2, -5, 10, -1]
console.log(findMaxSumSubArray(arr))