function findSecondMaximum(arr) {
    var first_max = max(arr);
    var count = - 1;
    var newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (first_max === arr[i]){
            deleter(arr[i]);
        } else {
            newArr[++count] = arr[i];
        }
    }
    return max(newArr);
}

function search(element) {
    for (var i = 0; i < this.count; i++) {
        if (arr[i] === element) return i;
        else return -1;
    }
}

function max(arr) {
    var maximum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (maximum < arr[i]) {
            maximum = arr[i];
        }
    }
    return maximum;
}
function deleter(element) {
    if (search(element)){
        return null;
    }
}

// var arr = [9, 2, 3, 6];
var arr = [4, 5, 1, 2, 0];
console.log(findSecondMaximum(arr));
