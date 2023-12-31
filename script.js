const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_+?:{}[]";

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSpecialChars = document.getElementById("includeSpecialChars").checked;
  let passwordLength = document.getElementById("passwordLength").value;

  // Ensure password length is within the valid range
  passwordLength = Math.max(6, Math.min(14, passwordLength));

  let chars = "";
  if (includeLowercase) chars += lowercaseLetters;
  if (includeUppercase) chars += uppercaseLetters;
  if (includeNumbers) chars += numbers;
  if (includeSpecialChars) chars += specialChars;

  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  alertContainerEl.innerText = password + " copied!";
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}

// Update password length value on range input change
const lengthValueEl = document.getElementById("lengthValue");
document.getElementById("passwordLength").addEventListener("input", () => {
  const passwordLength = document.getElementById("passwordLength").value;
  lengthValueEl.textContent = passwordLength;
});
