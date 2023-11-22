function maxMin(arr){
    var newArr = [];
    var small = 0, large = arr.length - 1;
 
    for (let i = 0; i < arr.length; i++) {
        if (i%2 === 0){
            newArr[i] = arr[large--];
        } else {
            newArr[i] = arr[small++];
        }
    }
    return newArr;
}

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(maxMin(arr));