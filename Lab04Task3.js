function fibanacci(number){
    if (number < 2){
        return number;
    }
    return fibanacci(number - 1)  + fibanacci(number - 2);
}
console.log(fibanacci(7));
