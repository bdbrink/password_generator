const readline = require('readline');
const crypto = require('crypto');

function generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecialChars) {
  let charset = '';

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

  if (charset.length === 0) {
    throw new Error('Error: You must include at least one character set.');
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charset.length);
    password += charset[randomIndex];
  }

  return password;
}

const questionAsync = (rl, prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => resolve(answer.trim()));
  });
};

async function getPasswordCriteria() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let length = 12; // Default password length
  let useUppercase = true;
  let useLowercase = true;
  let useNumbers = true;
  let useSpecialChars = true;

  try {
    length = parseInt(await questionAsync(rl, "Enter the desired password length (min 8): "), 10);

    if (isNaN(length) || length < 8) {
      throw new Error('Error: Password length must be an integer of at least 8 characters.');
    }

    useUppercase = (await questionAsync(rl, "Include uppercase letters? (y/n) ")).toLowerCase() === 'y';
    useLowercase = (await questionAsync(rl, "Include lowercase letters? (y/n) ")).toLowerCase() === 'y';
    useNumbers = (await questionAsync(rl, "Include numbers? (y/n) ")).toLowerCase() === 'y';
    useSpecialChars = (await questionAsync(rl, "Include special characters? (y/n) ")).toLowerCase() === 'y';

    // Close the readline interface
    rl.close();
  } catch (err) {
    console.error(err.message);
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
