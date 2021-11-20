//import {validateName,validateEmail,validateMessage,validateNumber} from "./validation.js";

let name = document.getElementById("name")
let email = document.getElementById("email")
let message = document.getElementById("message")
let error = document.querySelector(".error-message")


function validation(name,email,message) {
    while(true) {
        if(!validateName(name.value)) {
            error.classList.remove('hide')
            error.textContent="Name is incorrect"


        }
        else if(!validateEmail(email.value)) {
            error.classList.remove('hide')
            error.textContent="Email is incorrect"

        }
        else if(!validateMessage(message.value)) {
            error.classList.remove('hide')
            error.textContent="Message is incorrect"

        }
        else {
            error.classList.add('hide')
            document.querySelector('.success').classList.remove('hide')
            break;
        }
    }
}

function sendMail(params) {
    validation(name,email,message);
    let tempParams = {
        from_name:name.value,
        from_email:email.value,
        message: message.value
    }
    emailjs.send('service_r6f0duy','template_3qvjzop',tempParams)
        .then((res)=> {
            console.log(res.status)
        })
}

 function validateName(name) {
    return name.length > 3 && name.trim().length > 3
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateMessage(message) {
    return message.length > 10 && message.trim().length > 10
}


function validateNumber(number) {
    return /^\d+$/.test(number) && number.length === 11;
}