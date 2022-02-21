
// defining global variables
let characters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let createdPassword = "";
let choicesPicks = []

    // function to gather info for generated password
function userInfo() {
    // variable for user password length chosen
  let passwordLength = prompt("Please put between 8 and 128 characters");
    // conditional to tell user between 8 and 128 characters
  if (passwordLength < 8){
    alert("Password must be at least 8 characters.");
    return null
  }
  if(passwordLength > 128){
    alert("Password must be less than 128 characters.");
    return null
  }
    // confirm to ask user if special characters wanted
  let characterConfirm = confirm("Do you want to include special characters?");
    // condtional if user chose characters
  if (characterConfirm === true) {
    // array adding string 
    choicesPicks.push.apply(choicesPicks, characters);
    // random choice picked from character array
    randomChoice = characters[Math.floor(Math.random() * characters.length)];
    // randomized character added to generated password
    createdPassword += randomChoice;
  }
console.log(choicesPicks)
console.log(createdPassword)

    // confirm to ask user if numbers wanted
  let numberConfirm = confirm("Do you want to include numbers?");
    // condtional if user chose numbers
  if (numberConfirm === true) {
    // array adding string
    choicesPicks.push.apply(choicesPicks, numbers);
    // random choice picked from character array
    randomChoice = numbers[Math.floor(Math.random() * numbers.length)];
    // randomized character added to generated password 
    createdPassword += randomChoice;
  }
console.log(choicesPicks)
console.log(createdPassword)

    // confirm to ask user if upperscase letters wanted
  let uppercaseConfirm = confirm("Do you want to include uppercase letter?");
    // condtional if user chose uppercase letters
  if (uppercaseConfirm === true) {
    // array adding string
    choicesPicks.push.apply(choicesPicks, uppercase);
    // random choice picked from uppercase array
    randomChoice = uppercase[Math.floor(Math.random() * uppercase.length)];
    // randomized uppercase letter added to generated password
    createdPassword += randomChoice;
  }
console.log(choicesPicks)
console.log(createdPassword)

    // confirm to ask user if lowercase letters wanted
  let lowercaseConfirm = confirm("Do you want to include lowercase letters?");
    // condtional if user chose lowercase letters
  if (lowercaseConfirm === true) {
    // array adding string
    choicesPicks.push.apply(choicesPicks, lowercase);
    // random choice picked from lowercase array
    randomChoice = lowercase[Math.floor(Math.random() * lowercase.length)];
    // randomized lowercase letter added to generated password
    createdPassword += randomChoice;
  }
console.log(choicesPicks)
console.log(createdPassword)

    // if user doesnt pick any option function resets
  if(createdPassword === ""){
    alert("Please select at least one option.")
    return null
  }

  // for loop to add arrays to generate string for password
  for (let i = 0; i < passwordLength; i++) {
    randomPick = choicesPicks[Math.floor(Math.random() * choicesPicks.length)];
    createdPassword += randomPick;
  }
    console.log(createdPassword)
}

function generatePassword() {
  userInfo();
  return createdPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
