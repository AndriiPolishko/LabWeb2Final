//import {validateName,validateEmail,validateMessage,validateNumber} from "./validation.js";
import {NameValidation,EmailValidation,MessageValidation} from "./Validation/validation.js";

export let name = document.getElementById("name")
export let email = document.getElementById("email")
export let message = document.getElementById("message")
export let error = document.querySelector(".error-message")
export const submit = document.querySelector(".submit");

NameValidation();
EmailValidation();
MessageValidation();

submit.addEventListener('click',(event)=> {
    event.preventDefault();
    let tempParams = {
        from_name:name.value,
        from_email:email.value,
        message: message.value
    }
    emailjs.send('service_r6f0duy','template_3qvjzop',tempParams)
        .then(()=>{
            console.log("Success");
            name.value='';
            email.value='';
            message.value='';},
            (error)=>{console.log("Error :",error)})
})

