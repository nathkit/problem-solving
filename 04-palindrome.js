const specialChars = /[\s!@#$%^&*()_\-+=\[\]\\/{}<>?:;"'`~.,|]/g;

const isPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(specialChars, "")
    const reverseStr = cleanStr.split("").join("")
    return cleanStr === reverseStr
}

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");
const result4 = isPalindrome("eye");
const result5 = isPalindrome("_eye");
const result6 = isPalindrome("race car");
const result7 = isPalindrome("not a palindrome");
const result8 = isPalindrome("A man, a plan, a canal. Panama");
const result9 = isPalindrome("never odd or even");
const result10 = isPalindrome("nope");
const result11 = isPalindrome("almostomla");
const result12 = isPalindrome("My age is 0, 0 si ega ym.");
const result13 = isPalindrome("1 eye for of 1 eye.");
const result14 = isPalindrome("0_0 (: /-\\ :) 0-0");
const result15 = isPalindrome("five|\\_/|four");


console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
console.log(result4); // true
console.log(result5); // true
console.log(result6); // true
console.log(result7); // false
console.log(result8); // true
console.log(result9); // true
console.log(result10); // false
console.log(result11); // false
console.log(result12); // true
console.log(result13); // false
console.log(result14); // true
console.log(result15); // false