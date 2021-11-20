import {NameValidation,EmailValidation,MessageValidation} from "./Validation/validation.js";


export let name = document.getElementById("name")

export let email = document.getElementById("email")

export let message = document.getElementById("message")

export let error = document.querySelector(".error-message")

export const submit = document.querySelector(".submit");


const spinner = document.getElementById('spinner');

NameValidation();
EmailValidation();
MessageValidation();

submit.addEventListener('click',(event)=> {
    submit.setAttribute('disabled','true')
    submit.textContent = "Blocked"
    event.preventDefault();
    let tempParams = {
        from_name: name.value,
        from_email: email.value,
        message: message.value
    }

    emailjs.send('service_r6f0duy','template_3qvjzop',tempParams)
        .then(()=>{
            spinner.classList.remove('hide');
            setTimeout(()=> {
                spinner.classList.add('hide');
                submit.removeAttribute('disabled')
            },5*1000)
            console.log("Success");
            document.getElementById("success").classList.remove('hide')
            name.value='';
            email.value='';
            message.value='';
            setTimeout(()=>
                document.getElementById("success").classList.add('hide'),
                5*1000)},
            (error)=>{console.log("Error :",error)})

})

