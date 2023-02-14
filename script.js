
const generateBtn = document.querySelector("#generate");
const passwordField = document.querySelector("#password");


const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";


generateBtn.addEventListener("click", () => {

  let passwordLength = prompt("Enter the length of the password (minimum 8 characters, maximum 128 characters):");
  let includeLowercase = confirm("Include lowercase characters?");
  let includeUppercase = confirm("Include uppercase characters?");
  let includeNumeric = confirm("Include numeric characters?");
  let includeSpecial = confirm("Include special characters?");
console.log(isNaN(passwordLength))

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) || !includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    console.log(passwordLength)
        if (passwordLength < 8 || passwordLength > 128||isNaN(passwordLength)){
      alert("Password length must be between 8 and 128 characters!");
      passwordLength = prompt("Enter the length of the password (minimum 8 characters, maximum 128 characters):");
    } else {
      alert("At least one character type must be selected!");
      includeLowercase = confirm("Include lowercase characters?");
      includeUppercase = confirm("Include uppercase characters?");
      includeNumeric = confirm("Include numeric characters?");
      includeSpecial = confirm("Include special characters?");
    }
  }


  let characterSet = "";
  if (includeLowercase) {
    characterSet += lowercaseChars;
  }
  if (includeUppercase) {
    characterSet += uppercaseChars;
  }
  if (includeNumeric) {
    characterSet += numericChars;
  }
  if (includeSpecial) {
    characterSet += specialChars;
  }


  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }


  passwordField.value = password;
});
