// Assignment Code
var generateBtn = document.querySelector("#generate");
document.querySelector("#generate").addEventListener("click", function(writePassword){

var lowercaseAlpha = ("abcdefghijklmnopqrstuvwxyz")
var uppercaseAlpha = ("ABCDEGHIJKLMNOPQRSTUVWXYZ")
var numChars = ("123456789")
var specialChars = ("!@#$%^&*()`~-_=+{[}]\|;:'<,>.?/")

//series of prompts and confirms to verify user's password requirements

var passLength = prompt("How many characters for your password? Pick a number between 8 and 128.")

// ensures user picked a number between 8 and 128

if (passLength < 8 || passLength > 128) {
  alert("Please choose a number between 8 and 128.")
  return;
}

//charcter types

var requireLowercase = confirm("Do you want your password to contain lowercase characters?")
var requireUppercase = confirm("Do you want your password to contain uppercase characters?")
var requireNumbers = confirm("Do you want your password to contain numeric characters?")
var requireSpecial = confirm("Do you want your password to contain special characters?")

//testing that the user's password requirements meets the satisfactory requirements of a password.

if (requireLowercase !== true && requireUppercase !== true && requireNumbers !== true && requireSpecial !== true) {
  alert("Please select at least one character type.")
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  for (let i = 0; i < passLength; i++) {
    
    password = password + charTypes.charAt(Math.floor(Math.random() * Math.floor(charTypes.length - 1)));
    
    passwordText.value = password;
  }
}

if (requireLowercase && !requireUppercase && !requireNumbers && !requireSpecial) {
  charTypes = lowercaseAlpha;
  generatePassword();

} 
else if (requireLowercase && requireUppercase && !requireNumbers && !requireSpecial) {
  charTypes = lowercaseAlpha + uppercaseAlpha;
} 
else if (requireLowercase && requireUppercase && requireNumbers && !requireSpecial) {
  charTypes = lowercaseAlpha + uppercaseAlpha + numChars;
}
else if (requireLowercase && requireUppercase && requireNumbers && requireSpecial) {
  charTypes = lowercaseAlpha + uppercaseAlpha + numChars + specialChars;
}
else if (!requireLowercase && requireUppercase && !requireNumbers && !requireSpecial) {
  charTypes = uppercaseAlpha;
} 
else if (!requireLowercase && requireUppercase && requireNumbers && !requireSpecial) {
  charTypes = uppercaseAlpha + numChars;
}
else
  




})