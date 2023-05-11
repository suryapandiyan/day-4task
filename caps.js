let strArr = ["this is a sample string", "first example", "hello world"];

let titleCapsArr = strArr.map(str => str.replace(/\b\w/g, firstChar => firstChar.toUpperCase()));

console.log(titleCapsArr);
