# password-generator
Bryce Johnson

Repository:  https://github.com/aarkitekkt/password-generator
URL:  https://aarkitekkt.github.io/password-generator/

## Purpose

The purpose of this website is to create an application to generate randomized passwords given user inputs of length and character types.  When the page is first loaded, the user is presented with a series of prompts asking for desired password length and options to include character types including numbers, special characters, uppercase and lower case letters.  Once all of the prompts are completed, the page loads and the user can select generate to reveal their random password.  Every time the generate button is clicked, a new random password will generate following the originally specified criteria.  THe user is also given a button which will then copy the password to their clipboard.

## Method

The biggest challenge for this application was figuring out how to combine the desired character types into the password while leaving out the unwanted characters.  The method I used to achieve this was to first create two variables, the first an object which includes a series of values, one for each character type.  Each value consisted of a string of every possible character that can be used in the password. The second variable was left blank, but through a series of if statements associated with the inital user prompts, each desired character type is concatenated and the resutling variable consists of a single string of every possible character type chosen by the user.

Once the password length and character types are determined, a function using a for loop and random number generater creates a password randomly chosen from the string of characters.  This password is then displayed in the input field to be seen in the browser.

The application featurs a combination of bootstrap elements and style classes and a separate custom style sheet.  This application is also responsive and will work on mobile devices.

## Screengrabs

https://github.com/aarkitekkt/password-generator/blob/master/screengrabs/main.JPG
https://github.com/aarkitekkt/password-generator/blob/master/screengrabs/Capture.JPG
https://github.com/aarkitekkt/password-generator/blob/master/screengrabs/mobile.JPG
https://github.com/aarkitekkt/password-generator/blob/master/screengrabs/prompts.JPG





