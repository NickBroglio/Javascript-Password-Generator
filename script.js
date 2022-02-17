// // Assignment Code
var generateBtn = document.querySelector("#generate");
// // global arrays
let enter;
let lowercaseConfirm;
let uppercaseConfirm;
let numberConfirm;
let characterConfirm;

// Number values
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Character values
specialCharacters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
// lowercase values
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];






// function gatherInfo (){
//   var length = parseInt(prompt("How many characters do you want your password to be?"));
//   // create conditional to test if user put a number Number.isNaN
//   // create conditional to see if less than and greater than 128
//   // create 4 different confirms 
//   // create 1 conditional to list out if user chose false 
//   // create an object to hold all answers
//   var answers = {
//     length: length,
//     isLowercase: isLowercase,
//     isUppercase: isUppercase,
//     isNumber: isNumber,
//     isSpecial: isSpecial
//   }
//   return answers;
// }
// function randomI(arr){
//   var indexInfo = Math.floor(Math.random()*arr.length);
//   var indexEL = arr[indexInfo];
// }
// function generatePassword(){
//   var info = gatherInfo();
//   // create 3 empty arrays: guarantee, pool, final answer
//   // create 4 different conditionals
//   if (info.isLowercase){
//     pool = pool.concat(lowercase);
//     guarantee.push(randomI(lowercase));
//   }

// }
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


