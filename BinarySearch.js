class BinarySearch{
    
    binary_search(arr, query){
        let low = 0;
        let high = arr.length - 1;
        let mid = low + (high - low);
        let midnumber = arr[mid];
        if (mid == query){
            return mid;
        } else if (midnumber > query) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}
// var numbers = new Array(10);
// print(numbers.length); // displays 10
var arr = [-1,0,3,5,9,12];
var query = 9;
var bs = new BinarySearch();
var target = bs.binary_search(arr, query);
if (target === -1){
    console.log("Element Not Found.");
} else {
    console.log("Element Found At. ", target);
}