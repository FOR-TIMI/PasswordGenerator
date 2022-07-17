let numericCharacters = '1234567890';
let lowerCaseCharacters = 'abcdefghijklmnopqrstwxyz';
let upperCaseCharacters =lowerCaseCharacters.toUpperCase();
let specialCharacters = "~`!@#$%^&*()-_+={}[]|:;'<>,.?" //91-96

//To get the length;
const lengthInput = document.querySelector('#length');
const range = document.querySelector('.range-value');

// Update the current slider value (each time you drag the slider handle)
lengthInput.oninput = function() {
    range.innerText = this.value;
  }




function generatepassword(){
     
//To select checkboxes
const upperCaseInput = document.querySelector('#uppercase');
const numberInput = document.querySelector('#number');
const symbolInput = document.querySelector('#symbol')
const lowerCaseInput = document.querySelector('#lowercase');

let params = []

  let password =''

   //Checking for the checkboxes that where checked

        if(lowerCaseInput.checked){
            params.push(lowerCaseCharacters)
            }


        if(upperCaseInput.checked){
           params.push(upperCaseCharacters)
        }


         if(numberInput.checked){
          params.push(numericCharacters)
        }


       if(symbolInput.checked){
         params.push(specialCharacters)
       }

       if(!params.length) return 'Choose some settings'

      function randomParam(){
       return params[Math.floor(Math.random() * params.length)]
      }

   let random

   //iteratitng over the parameters provided by the user
   for(let i =0; i < lengthInput.value; i++){
        random = randomParam();
        if(i > params.length - 1){
          //adding a random elemet from the parameters to the password
        password+= random[Math.floor(Math.random() * random.length)]
        }
        else{
          //making sure that all the parameters are included no matter what
            password+=params[i][Math.floor(Math.random() * params[i].length)] 
        }
   }
    

       return password
  
}


//DOM Manipulation

const passwordText = document.querySelector('#password')
const generatePasswordButton  = document.querySelector('.btn');
const popup = document.querySelector('.popup')


function copyToClipboard(){
  passwordText.select();
  document.execCommand('copy');
}

passwordText.addEventListener('click',function(){
  //To make sure only the password can be copied
  if(passwordText.innerHTML !== '' && passwordText.innerHTML !== 'Choose some settings'){
    popup.classList.add('active');
    copyToClipboard();
  }

})

popup.addEventListener('animationend', function(){
  popup.classList.remove('active');
})

// Add event listener to generate button
generatePasswordButton.addEventListener('click', (e) =>{
    e.preventDefault();
    let password = generatepassword();
    passwordText.innerText = password;
})


