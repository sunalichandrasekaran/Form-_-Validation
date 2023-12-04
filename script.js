const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');


//to sumbit 
form.addEventListener('submit',(e)=>{
    
   if (!validateInputs()) {
       e.preventDefault();
   }
})

//input values 
function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    let success = true;

    if(usernameVal === ''){
        success = false;
        SetError(username,'Username is reqiured')
    }
    else{
        SetSuccess(username)
    }

    if(emailVal === ''){
        success = false;
        SetError(email,'email is reqiured')
    }
    else if (!validateEmail(emailVal)){
        success = false;
        SetError(email,"Please enter correct email")
    }
    else{
        SetSuccess(email)
    }

    if(passwordVal === ''){
        success = false;
        SetError(password,'password is reqiured')
    }
    else if(passwordVal.lenght<8){
        SetError(password,'password must have atleast 8 characters')
    }
    else{
        SetSuccess(password)
    }
    if(cpasswordVal === ''){
        success = false;
        SetError(cpassword,'Confirm Password is required')
    }
    else if(cpasswordVal!== password){
        success = false;
        SetError(cpassword,`password doesn't match`)
    }
    else{
        SetSuccess(cpassword)
    }

    return success;
};



//error 
function SetError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');


    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
};


//success
function SetSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');


    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
};


//function for email 
const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
};

