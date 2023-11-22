function searchElement(arr, test_variable, current_index){
    if (arr.length - 1 < current_index){
        return -1;
    } 
    if (test_variable == arr[current_index]){
        return current_index;
    } else {
        return searchElement(arr, test_variable, current_index + 1);
    }
}
let arr = [9, 8, 1, 8, 1, 7];
let test_variable = 1;
let current_index = 0;
console.log(searchElement(arr, test_variable, current_index))                                                                                                                                       