let numericCharacters = '1234567890';
let lowerCaseCharacters = 'abcdefghijklmnopqrstwxyz';
let upperCaseCharacters = lowerCaseCharacters.toUpperCase();
let specialCharacters = "~`!@#$%^&*()-_+={}[]|:;'<>,.?" //91-96



function generatepassword(){

  let params = []
  let password =''

  let length = prompt('How long should the password be');
  if(typeof length !== 'number'){
     prompt('Enter a valid length')
  }
  while(length < 8 || length > 128 ){
   length = prompt('length must be between 8 and 128')
  }


        lowercase = prompt('Should lower case be included? y/n')
        if(lowercase.toLowerCase() === 'y'){
          params.push(lowerCaseCharacters)
        }

        uppercase = prompt('Should upper case be included? y/n')
        if(uppercase.toLowerCase() === 'y'){
          params.push(upperCaseCharacters)
        }

        numeric = prompt('Should numeric be included? y/n')
        if(numeric.toLowerCase() === 'y'){
        params.push(numericCharacters)
       }

       specialChar = prompt('Should special Character be included? y/n')
       if(specialChar.toLowerCase() === 'y'){
        params.push(specialCharacters)
       }

       function randomParam(){
          return params[Math.floor(Math.random() * params.length)]
          }

   let random
   for(let i =0; i < length; i++){
        random = randomParam();
       if(i > params.length - 1){
       password+= random[Math.floor(Math.random() * random.length)]
       }
       else{
           password+=params[i][Math.floor(Math.random() * params[i].length)] 
       }
   }


       return password



}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write passwordword to the #passwordword input
function writepassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writepassword);