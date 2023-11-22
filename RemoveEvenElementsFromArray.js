// Systematic strategy for solving the problem
// test case: [1, 2, 3, 4, 5, 10, 6, 17] =====> Output: [ 1, 3, 5, 17 ]
// test case2: [1,3,5,7,9] ======> Output: [ 1, 3, 5, 7, 9 ]
// test case3: [2, 4, 6, 8, 10] ========> []
// first create an other array which will store those element which will be odd 
// second create a count variable and initialize it with -1 
// create a loop start from 0 and end it arr.length 
// check wheather the number on index i is odd or not if odd then store it in newArr[] and ++count  
function removeEven(arr) {
    var newArr = [];
    var count = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            newArr[++count] = arr[i];
        } 
    }
    return newArr;
}

var arr = [1, 2, 3, 4, 5, 10, 6, 8, 17];
// var arr = [1,3,5,7,9];
// var arr = [2, 4, 6, 8, 10];
console.log(removeEven(arr));