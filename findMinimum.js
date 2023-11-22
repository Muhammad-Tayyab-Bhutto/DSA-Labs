function findMinimum(arr){
    var min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (min > arr[i]){
            min = arr[i];
        }
    } 
    return min;
}
// var arr = [9, 2, 3, 6];
var arr = [4,2,1,5,0];
console.log(findMinimum(arr));