function reArrange(arr){
    var newArr = [];
    var count = -1;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0){
            newArr[++count] = arr[index];
        }
    }
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] >= 0){
            newArr[++count] = arr[index];
        }
    }
    return newArr;
}
var arr = [10, -1, 20, 2, 3, -2, -5]
console.log(reArrange(arr))