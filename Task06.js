function decimalToBinary(number){
    return (number >>> 0).toString(2);
}
console.log(decimalToBinary(11));