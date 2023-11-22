function pow(base, power) {
    if (power != 0)
        return (base * pow(base, power - 1));
    else
        return 1;
}
console.log(pow(2, 4))
console.log(4 ^ 56)