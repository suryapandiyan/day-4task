let arr = ["level", "hello", "racecar", "world", "deified"];

let isPalindrome = str => {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};

let palindromeArr = arr.filter(isPalindrome);

console.log(palindromeArr);
