function numberOfSameElements(arr, number){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == number){
            count++;
        }
    }
    return count;
}
let arr = [1, 4, 1, 42, 3, 5, 1];
console.log(numberOfSameElements(arr, 1));