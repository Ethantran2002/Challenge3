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
function generatePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");
  
  for (let i = 0; i < passLength; i++) {
    
    password = password + charTypes.charAt(Math.floor(Math.random() * Math.floor(charTypes.length - 1)));
    
    passwordText.value = password;
    
  }
  //1
if (requireLowercase && !requireUppercase && !requireNumbers && !requireSpecial) {
  charTypes = lowercaseAlpha;
  generatePassword();
// 1 & 2
} 
else if (requireLowercase && requireUppercase && !requireNumbers && !requireSpecial) {
  charTypes = lowercaseAlpha + uppercaseAlpha;
  generatePassword();
// 1, 2, 3
} 
else if (requireLowercase && requireUppercase && requireNumbers && !requireSpecial) {
  charTypes = lowercaseAlpha + uppercaseAlpha + numChars;
  generatePassword();
// 1, 2, 3, 4
}
else if (requireLowercase && requireUppercase && requireNumbers && requireSpecial) {
  charTypes = lowercaseAlpha + uppercaseAlpha + numChars + specialChars;
  generatePassword();
// 2
}
else if (!requireLowercase && requireUppercase && !requireNumbers && !requireSpecial) {
  charTypes = uppercaseAlpha;
  generatePassword();
// 2 & 3
} 
else if (!requireLowercase && requireUppercase && requireNumbers && !requireSpecial) {
  charTypes = uppercaseAlpha + numChars;
  generatePassword();
// 2, 3, 4
}
else if (!requireLowercase && requireUppercase && requireNumbers && requireSpecial) {
  charTypes = uppercaseAlpha + numChars + specialChars;
  generatePassword();
// 3
}
else if (!requireLowercase && !requireUppercase && requireNumbers && !requireSpecial) {
  charTypes = numChars;
  generatePassword();
// 3 4
}
else if (!requireLowercase && !requireUppercase && requireNumbers && requireSpecial) {
  charTypes = numChars + specialChars;
  generatePassword();
}
// 1 2 4
else if (requireLowercase && requireUppercase && !requireNumbers && requireSpecial) {
  charTypes = uppercaseAlpha + lowercaseAlpha + specialChars;
  generatePassword();
  
}
passwordText.value = password
console.log(password);

}
})