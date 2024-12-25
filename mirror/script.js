let str="happy";
let newStr = str.split('').reverse().join('');
console.log(newStr);

let str2= str.concat( "", newStr);
console.log(str2);