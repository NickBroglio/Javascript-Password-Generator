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
// uppercase values
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// variable for password length
let passwordLength;
// variable for storing password
let passwordStore;

// generateBtn.addEventListener("click", function(){
//     ps = generatePassword
//     document.getElementById("#generate");
// });

function generatePassword (){
    window.enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));
        window.confirmLowercase = confirm("Do you want to contain lowercase letters?");
        window.confirmUppercase = confirm("Do you want to contain uppercase letters?");
        window.confirmNumber = confirm("Do you want to contain numbers?");
        window.confirmCharacter = confirm("Do you want to contain special characters?");
}};


// function generatePassword() {
//     // Asks for user input
//     enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
//     // First if statement for user validation 
//     if (!enter) {
//         alert("This needs a value");
//     } else if (enter < 8 || enter > 128) {
//         // Validates user input
//         // Start user input prompts
//         enter = parseInt(prompt("You must choose between 8 and 128"));

//     } else {
//         // Continues once user input is validated
//         confirmNumber = confirm("Will this contain numbers?");
//         confirmCharacter = confirm("Will this contain special characters?");
//         confirmUppercase = confirm("Will this contain Uppercase letters?");
//         confirmLowercase = confirm("Will this contain Lowercase letters?");
//  } };

// function gatherInfo (){
//   var length = parseInt(prompt("How many characters do you want your password to be?"));
//   // create conditional to test if user put a number Number.isNaN
//   // create conditional to see if less than 8 and greater than 128
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




