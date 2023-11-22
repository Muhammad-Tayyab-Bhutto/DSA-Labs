function sum(str){
    str = parseInt(str)
    if (str ==  0){
        return 0;
    }
    return (str % 10 + sum(str / 10));
}
console.log(sum("345"))