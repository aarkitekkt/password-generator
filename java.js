var length = prompt("Enter password length(8-128)");

if (length < 8) {
    alert("Must be at least 8 characters");
} else if (length > 128) {
    alert("Must be less than 128 characters");
}

var numbersConfirm = confirm("Do you want to include numbers?");
var specialConfirm = confirm("Do you want to include special characters?");
var upperConfirm = confirm("Do you want to include uppercase letters?");
var lowerConfirm = confirm("Do you want to include lowercase letters?");
var characters = "";
var charOptions = {
    numbers: "0123456789",
    special: "#$%&'()*+,-./:;<=>?@^_`{|}~",
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

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

if (numbersConfirm === false && specialConfirm === false && upperConfirm === false && lowerConfirm === false) {
    alert("You must choose at least one option!")
}

console.log(generator(length, characters))



function generator(l, x) {
    var password = "";
    for (i = 0; i < l; i++) {
        password += x.charAt(Math.floor(Math.random() * x.length));
    }
    return password;
}




document.getElementById("pwd").innerHTML = pwd;






