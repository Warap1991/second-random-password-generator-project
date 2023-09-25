const generateButton = document.getElementById('generate-button');
const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
alert("Welcome to the Random Password Generator!\n\nHere's how it works:\n\n1. Adjust the 'Password Length' to set the desired length of your password (between 4 and 50 characters).\n2. Choose the character types to include in your password by checking the corresponding boxes: 'Uppercase Letters,' 'Lowercase Letters,' 'Numbers,' and 'Symbols.'\n3. Click the 'Generate Password' button, and your random password will appear in the text box below.\n4. You can copy and use the generated password for your accounts and secure your online presence!\n\nEnjoy using the Random Password Generator for strong and secure passwords.");
function generatePassword() {
    const length = lengthInput.value;
    const useUppercase = uppercaseCheckbox.checked;
    const useLowercase = lowercaseCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;

    let charset = '';
    if (useUppercase) charset += uppercaseChars;
    if (useLowercase) charset += lowercaseChars;
    if (useNumbers) charset += numberChars;
    if (useSymbols) charset += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordInput.value = password;
}

generateButton.addEventListener('click', generatePassword);

// Initial generation
generatePassword();
