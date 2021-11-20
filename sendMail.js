import {validateName,validateEmail,validateMessage,validateNumber} from "./Validation/validation";

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let message = document.getElementById("message").value
let error = document.querySelector(".error-message")


function validation(name,email,message) {
    while(true) {
        if(!validateName(name)) {
            error.classList.remove('hide')
            error.textContent="Name is incorrect"


        }
        else if(!validateEmail(email)) {
            error.classList.remove('hide')
            error.textContent="Email is incorrect"

        }
        else if(!validateMessage(message)) {
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
        from_name:name,
        from_email:email,
        message: message
    }
    emailjs.send('service_r6f0duy','template_3qvjzop',tempParams)
        .then((res)=> {
            console.log(res.status)
        })
}