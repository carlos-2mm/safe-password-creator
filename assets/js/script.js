// Assignment code here

// Function to generate a random password
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz".split(',');
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(',');
  var numeric = "0123456789".split(',');
  var special = "!@#$%^&*()_-+=[]{}|;:,.<>?".split(',');

  // Ask user for password length
  var passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");

  // Check if the user entered a valid number
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return "";
  }

  // Ask user for character types to include
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Check if the user selected at least one character type
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("Please select at least one character type.");
    return "";
  }

  // Character set based on user choices
  var characterSet = "";
  if (includeLowercase) characterSet = characterSet.concat (lowercase);
  if (includeUppercase) characterSet = characterSet.concat (uppercase);
  if (includeNumeric) characterSet = characterSet.concat (numeric);
  if (includeSpecial) characterSet = characterSet.concat (special);

  // Generate the random password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * characterSet.length);
    password = password + characterSet[randomPassword];
  }

  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
