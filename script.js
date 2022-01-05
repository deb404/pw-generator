// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
 
var passLength = prompt("How many characters would you like your password to contain?");
var special = confirm("Click OK to conrfirm special characters.");
var numeric = confirm("Click OK to confirm numeric characters.");
var lowercase = confirm("Click OK to confirm including lowercase characters." );
var uppercase =confirm("Click OK to confirm including uppercase characters ");
var password= "";
// possible passwordvalues
var andrew ="";
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var getLow="abcdefghijklmnopqrstuvwxyz";
var numb = "1234567890";
var char = "!@#$%^&*()_+";

if ((passLength >= 8 && passLength<=128) && (special || numeric || lowercase || uppercase )) {
  if (special) {
    andrew = andrew + char;
  }
  if (numeric){
    andrew = andrew + numb;
  }
  if (lowercase){
    andrew = andrew + getLow;
  }
  if (uppercase){
    andrew = andrew + values;
  }

    
  //  create for loop to choose charcters
    for (var i = 0; i < passLength; i++){
      var randomNum = Math.floor(Math.random() * andrew.length)
      password = password + andrew.charAt(randomNum);
      
    }
    return password;
  }
 
 else {
   alert("You must include at least 8 characters and atleast one criteria!")
 }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// make function genrate password that returns a generated password
// generate password will do all prompts

// objective create a strong password by asking questions
// if button clicked then prompts begin asking questions
// confirm criteria
// prompt password of 8-128 characters
// prompt character types
// generate password and written to page or displayed in alrt
// 