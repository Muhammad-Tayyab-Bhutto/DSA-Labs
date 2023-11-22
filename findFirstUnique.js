function findFirstUnique(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i; j < arr.length; j++){
            if (arr[i] !== arr[j] && j === arr.length-1){
                return arr[i];               
            }
        }
    }
}

var arr = [9, 2, 3, 2, 6, 6];
// var arr = [4,5,1,2,0,4];
console.log(findFirstUnique(arr));

