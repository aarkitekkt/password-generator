//Prompt asking for desired password length
var length = prompt("Enter password length(8-128)");

//Check to see if password length is in the correct range and is a number.
while (length < 8 || length > 128) {
    alert("Password must be in between 8 and 128 characters");
    var length = prompt("Enter password length(8-128)");
}
while (isNaN(length) === true) {
    alert("Must enter a number");
    var length = prompt("Enter password length(8-128)");
}

//Prompts to find out which types of characters to be included in password.
var numbersConfirm = confirm("Do you want to include numbers?");
var specialConfirm = confirm("Do you want to include special characters?");
var upperConfirm = confirm("Do you want to include uppercase letters?");
var lowerConfirm = confirm("Do you want to include lowercase letters?");

//Check to see if at least one character type is selected for password.
while (numbersConfirm === false && specialConfirm === false && upperConfirm === false && lowerConfirm === false) {
    alert("You must choose at least one option");
    var numbersConfirm = confirm("Do you want to include numbers?");
    var specialConfirm = confirm("Do you want to include special characters?");
    var upperConfirm = confirm("Do you want to include uppercase letters?");
    var lowerConfirm = confirm("Do you want to include lowercase letters?");
}

//Combine all selected character types into single string.
var charOptions = {
    numbers: "0123456789",
    special: "#$%&'()*+,-./:;<=>?@^_`{|}~",
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
var characters = "";

if (numbersConfirm === true) {
    characters += charOptions.numbers;
}
if (specialConfirm === true) {
    characters += charOptions.special;
}
if (upperConfirm === true) {
    characters += charOptions.upper;
}
if (lowerConfirm === true) {
    characters += charOptions.lower;
}

//when "Generate" button is clicked, run the functions to generate the password and fill text box with password.
document.getElementById("generate").onclick = function () { passFill() };

function passFill() {
    var password = generator(length, characters);
    document.getElementById("passwordBox").value = password;
}
function generator(l, c) {
    var pw = "";
    for (i = 0; i < l; i++) {
        pw += c.charAt(Math.floor(Math.random() * c.length));
    }
    return pw;
}

//When "Copy" button is clicked, run the functions to copy generated password to clipboard.
document.getElementById("copy").onclick = function () { copyPass() };

function copyPass() {
    var passCopy = document.getElementById("passwordBox");
    passCopy.select();
    passCopy.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Password copied to clipboard");
}








