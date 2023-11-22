let count = 0;
function find_number_of_vowels(str){
    if (str.length < 1){
        return str;
    }
    if (str[str.length-1] === 'a' || str[str.length-1] === 'e' || str[str.length-1] == 'i' || str[str.length-1] == 'o' || str[str.length-1] == 'u'){
        count++;
    }
    
    return str[str.length - 1] + find_number_of_vowels(str.substring(0, str.length - 1));
}
let str = "abesci";
find_number_of_vowels(str);
console.log("Vowels in string.... "+count);