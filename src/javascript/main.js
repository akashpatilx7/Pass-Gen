// DOM Elements

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");



// Putting all the 4 Defined Functions in an Object (with keys, 1 for each of the 4 Defined Functions)

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Generate Event Listener
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  // console.log(typeof length);
  // As the type of the length variable is string and we want it to be a number, we will simply add a '+' sign before the "lengthEl.value" while declaring the variable.

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
  // Passing whatever the Generated Password is to the resultEl to display in the Horizontal Bar.
});

// Copy Password To Clipboard (STANDARD METHOD IN JAVASCRIPT)
clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText; // innerText is used to copy or paste some text to or from an element.

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password Copied To Clipboard !");
});

// Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
  // 1. Initialize a password variable (We will have a string that will continuously build on to create a password.

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol; // A variable for counting the number of checked values from the Password Generator Dialogue Box.

  // console.log("typesCount: ", typesCount);

  // const typesArr = [{ lower }, { upper }, { number }, { symbol }]; // An array of variables used for counting the number of checked values from the Password Generator Dialogue Box.

  // By wrapping in "Curly Braces", we will get an array of objects having their values of "True" or "False" by their sides.

  // 2. Filter out unchecked types of elements from getting included in the "Generated Password". (We will use filter method for this)

  // In a filter method applied on arrays, it will iterate over each of the elements, one by one, and will separate out the elements having the value : "FALSE"

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  // console.log("typesArr: ", typesArr);

  // IF NOTHING FROM THE CHECKBOX OPTIONS ARE CHECKED, WE DON'T EVEN NEED TO GENERATE THE PASSWORD.
  if (typesCount === 0) {
    return "";
  }

  // 3. Loop over the length and call the generator function for each type of inputs to be included in the "Generated Password". (Generating the different characters, uppercase, lowercase, etc)

  // Looping over the "Generated Password" String
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];

      // console.log("funcName: ", funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }

  // Even if, we are giving the "Password Length" as 1, we are getting a Generated Password of Lenght=4.

  // To counter this problem, here we have used a 'slice' method.

  // console.log(generatedPassword.slice(0, length));

  // Creating a variable to put our "Final Password" into it.

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;

  // 4. Add the final password to the password variable and return it to the Result Container.

  // We have already done this step as we putting our finalPassword into the generatedPassword and we have already put the generatedPassword into the "Result Container".
}

// Generator Functions

function getRandomLower() {
  // Math.random() ===> Generates A Random Decimal Number from 0 to 1
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

// console.log(getRandomLower());

/* 
BROWSER CHARACTER SET LINK : https://net-comber.com/charset.html


If on a string object, we run a method called as "fromCharCode(), we will get certain CHARACTERS based on their ASCII CODE VALUES which are given as input to the fromCharCode() function.

console.log(String.fromCharCode(97)); ===> OUTPUT : 'a'

*/

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// console.log(getRandomNumber());

function getRandomSymbol() {
  // In Javascript, we can get a character from a string in a similar way as an array.

  const symbols = "!@#$%^&*(){}[]<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// console.log(getRandomSymbol());







// SOCIAL PANEL JS

const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});
