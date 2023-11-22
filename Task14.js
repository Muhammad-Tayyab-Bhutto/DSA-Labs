function findAverage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
let arr = [1, 4, 5, 2]
console.log(findAverage(arr, arr.length))