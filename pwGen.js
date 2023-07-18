// Function to generate a random password
function generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecialChars) {
    var charset = '';
  
    if (useUppercase) {
      charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    if (useLowercase) {
      charset += 'abcdefghijklmnopqrstuvwxyz';
    }
  
    if (useNumbers) {
      charset += '0123456789';
    }
  
    if (useSpecialChars) {
      charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    }
  
    var password = '';
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  }
  
  // Prompt the user for password criteria
  var length = parseInt(prompt("Enter the desired password length:"));
  var useUppercase = confirm("Include uppercase letters?");
  var useLowercase = confirm("Include lowercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecialChars = confirm("Include special characters?");
  
  // Generate and display the password
  var password = generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecialChars);
  console.log("Generated password: " + password);
  