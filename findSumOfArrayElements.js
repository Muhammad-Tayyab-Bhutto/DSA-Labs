function findSum(arr, num){
    console.log(typeof num)
    var sumArr = new Array();
    var count = -1;
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            sum = arr[i]+arr[j];
            if(sum == num){
                sumArr[++count] = arr[i];
                sumArr[++count] = arr[j];
            }
        }
    }
    return sumArr;
}
const prompt = require("prompt-sync")();
var arr = [1, 21, 3, 14, 5, 60, 7, 6];
let num = prompt("Please Enter Sum Number. ");
console.log(findSum(arr, num));
