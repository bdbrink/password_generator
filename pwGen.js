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
    charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  }

  var password = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

function questionAsync(rl, prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => resolve(answer.trim()));
  });
}

async function getPasswordCriteria() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let length, useUppercase, useLowercase, useNumbers, useSpecialChars;

  try {
    length = parseInt(await questionAsync(rl, "Enter the desired password length: "));
    useUppercase = (await questionAsync(rl, "Include uppercase letters? (y/n) ")).toLowerCase() === 'y';
    useLowercase = (await questionAsync(rl, "Include lowercase letters? (y/n) ")).toLowerCase() === 'y';
    useNumbers = (await questionAsync(rl, "Include numbers? (y/n) ")).toLowerCase() === 'y';
    useSpecialChars = (await questionAsync(rl, "Include special characters? (y/n) ")).toLowerCase() === 'y';

    // Close the readline interface
    rl.close();
  } catch (err) {
    console.error("Error: Invalid input.");
    rl.close();
    process.exit(1);
  }

  return { length, useUppercase, useLowercase, useNumbers, useSpecialChars };
}

(async () => {
  const passwordCriteria = await getPasswordCriteria();

  // Generate and display the password
  const password = generatePassword(
    passwordCriteria.length,
    passwordCriteria.useUppercase,
    passwordCriteria.useLowercase,
    passwordCriteria.useNumbers,
    passwordCriteria.useSpecialChars
  );
  console.log("Generated password:", password);
})();
