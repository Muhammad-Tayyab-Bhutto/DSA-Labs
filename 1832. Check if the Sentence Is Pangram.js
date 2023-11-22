// var checkIfPangram = function(sentence) {
//     let arr = new Array();
//     if (sentence.length < 26){
//         return false;
//     }else {
//         for (let i = 0; i < sentence.length; i++){
//             for (let j = i+1; j < sentence.length; j++)
//                 if (sentence[i] != sentence[j]){
//                     arr[i] = sentence[i];
//                 }
//         }
//     }
//     // if (arr.length == 26){
//     //     return true;
//     // }
//     return arr
// };
// let sentence = "thequickbrownfoxjumpsoverthelazydog";
// console.log(checkIfPangram(sentence));

function sum(number){
    if (number === 0){
        return 0;
    } 
    console.log(number)
    return sum(number - 1) + number;
}

console.log(sum(5))
// sum(5)

// function reverseString(str){
//     if(str.length < 1){
//         return str;
//     }
//     else {
//         return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
//     }
// }
// let str = "abcd";
// console.log(reverseString(str))
// function fibanacci(number){
//     if (number < 2){
//         return number;
//     }
    
//     return fibanacci(number - 1) + fibanacci (number - 2)
// }
// console.log(fibanacci(3))

