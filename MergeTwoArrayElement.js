function mergeArrays(arr1, arr2){
    var newArr = [];
    var count = 0;
    var len = (arr1.length -1) + (arr2.length) 
    for (var i = 0; i <= len; i++){
        if (i < arr1.length){
            newArr[i] = arr1[i];
        } else {
            newArr[i] = arr2[count++];
        }
    }
    return newArr;
}
var arr1 = [1,3,5,7,9];
var arr2 = [21, 14, 16, 18, 10];
console.log(mergeArrays(arr1, arr2));