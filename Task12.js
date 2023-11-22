let temp;
function reverseArray(arr){
    let count = 0;
    let reversedArray = new Array(arr.length);
    for (let i = arr.length-1; i >= 0; i--){
        reversedArray[count++] = arr[i]
    }
    return reversedArray;
}
let arr = [1, 4, 8, 42, 13, 25, 31];
console.log(reverseArray(arr))