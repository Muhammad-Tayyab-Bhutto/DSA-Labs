function gcd(number1, number2){
    if(number1 == 0) return number1;
    if(number2 == 0) return number2;
    if(number1 == number2) return number1;
    if(number1 > number2) return gcd(number1 - number2, number2);
    else return gcd(number1 , number2 - number1 );
}
console.log(gcd(14, 36));