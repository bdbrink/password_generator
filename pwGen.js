const readline = require('readline');

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

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for password criteria
rl.question("Enter the desired password length: ", function(length) {
  length = parseInt(length);
  
  rl.question("Include uppercase letters? (y/n) ", function(useUppercase) {
    useUppercase = (useUppercase.toLowerCase() === 'y');

    rl.question("Include lowercase letters? (y/n) ", function(useLowercase) {
      useLowercase = (useLowercase.toLowerCase() === 'y');

      rl.question("Include numbers? (y/n) ", function(useNumbers) {
        useNumbers = (useNumbers.toLowerCase() === 'y');

        rl.question("Include special characters? (y/n) ", function(useSpecialChars) {
          useSpecialChars = (useSpecialChars.toLowerCase() === 'y');

          // Generate and display the password
          var password = generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecialChars);
          console.log("Generated password: " + password);

          // Close the readline interface
          rl.close();
        });
      });
    });
  });
});
