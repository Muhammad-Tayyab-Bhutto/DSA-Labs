function  findProduct(arr){
    var productArr = [];
    for (let i = 0; i < arr.length; i++){
        let product = 1;
        for (let j = 0; j < arr.length; j++){
            if (j !== i){
                product *= arr[j];
            }
        }
        productArr[i] = product;
    }
    return productArr;
}
// var arr = [1, 2, 3, 4];
var arr = [4,2,1,5,0];
console.log(findProduct(arr));