# Random Password Generator

This is a simple JavaScript script that generates a random password based on user-defined criteria. It allows you to specify the length of the password and choose whether to include uppercase letters, lowercase letters, numbers, and special characters.

## How to Use

1. Ensure you have Node.js installed on your machine.

2. Download or clone the repository to your local machine.

3. Open a terminal or command prompt and navigate to the project directory.

4. Install the necessary dependencies by running the following command:
    `npm install`

5. Run the script using the following command:
    `node pwGen.js`

6. Follow the prompts to enter the desired password length and select the criteria for the password.

7. Once you provide all the input, the script will generate a random password based on your criteria and display it in the console.

## Customization

You can customize the character sets used for generating passwords by modifying the `charset` variable inside the `generatePassword` function. Additionally, you can adjust the special characters included by modifying the `useSpecialChars` string.

## Dependencies

This script requires the following dependency:

- [readline](https://nodejs.org/api/readline.html): A built-in Node.js module used to read input from the command line.
