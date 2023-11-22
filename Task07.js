function removeSpaces(str){
    return str.replace( / +/g, ' ')
}
let str = "This is    Muhammad Tayyab           Bhutto"
console.log(removeSpaces(str))