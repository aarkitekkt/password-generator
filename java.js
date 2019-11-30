var characters = "";
var charOptions = {
    numbers: "0123456789",
    special: "#$%&'()*+,-./:;<=>?@^_`{|}~",
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
//Prompt asking for desired password length
var length = prompt("Enter password length(8-128)");

//Check to see if password length is is the correct range.
while (length < 8 || length > 128) {
    alert("Password must be in between 8 and 128 characters");
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


console.log(generator(length, characters))


//Function to generate password given the length and character inputs.
function generator(l, x) {
    var password = "";
    for (i = 0; i < l; i++) {
        password += x.charAt(Math.floor(Math.random() * x.length));
    }
    return password;
}






