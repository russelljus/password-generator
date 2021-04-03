
// Assignment Code
// Assignment code here
var numberArray =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharactersArray = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCaseArray = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCaseArray = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

function random (array){
    var grabRandomIndex = Math.floor(Math.random()* array.length) // Creates a random index based on the length of the array that function uses

    var convertedIndex = array [grabRandomIndex] // if chose uppercase array and grab randome index retuns 2 
    // then converted index would look like upperCaseArray[2] = "C"  (basically the array name and index value lowerCaseArray[5] == "f" )

    return convertedIndex
}



function userInput () {
    // prompts command for user input
    var characterLength = parseInt(prompt ("how long do you want your password to be?"))
    console.log (characterLength)
    if (characterLength < 8) {
        alert("password must be at least 8 characters long")
        return

    }
    if (characterLength > 128) {
        alert ("password must be less than 128 characters long")
        return
    }
    // Confirms return a boolean value
    var upperCase = confirm ("do you want uppercase letters in your password?")
    var lowerCase = confirm ("do you want lowercase characters in your password?")
    var numbers = confirm ("do you want numbers in your password?")
    var special = confirm ("do you want special characters in your password?")

    var actualUserChoice = {
        howLong: characterLength, 
        HasUpperCase: upperCase,
        HasLowerCase: lowerCase,
        HasSpecialCharacters: special,
        HasNumbers: numbers,
        // Key: value (comes from user input)
    }
    console.log (actualUserChoice)
    return actualUserChoice
}


function generatePassword () {
    var UserOptions = userInput() // this variable calls user input funciton, which makes actual user object in line 29 available
    var generatedPassword = []
    var availableCharacters = []

    if (UserOptions.HasSpecialCharacters) { //refrences key in user input object as true or false
        availableCharacters = availableCharacters.concat(specialCharactersArray) //refrences the top of the script.js
        availableCharacters.push (random(specialCharactersArray))
    }

    if (UserOptions.HasUpperCase) {
        availableCharacters = availableCharacters.concat(upperCaseArray)
        availableCharacters.push (random(upperCaseArray))
    }
    // Need if blocks for numbers and lowercase 

    for(var i = 0; i < UserOptions.howLong; i++) {
        var stagedPassword = random(availableCharacters)//randomizes everything we pushed into the characters array 
        generatedPassword.push(stagedPassword)
    }

    console.log (generatedPassword)
    return generatedPassword.join("")
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);