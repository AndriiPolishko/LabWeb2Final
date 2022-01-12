

import {error,name,email,message, submit,sendMail} from "../sendMail.js";

let form = document.querySelector(".contact-form")
name.addEventListener('input',function(event) {
    if(name.validity.valid) {
        error.textContent="";
        error.style.backgroundColor="var(--black)";
    }
    else {
        showError();
    }
});

email.addEventListener('input',function(event) {
    if(email.validity.valid) {
        error.textContent="";
        error.style.backgroundColor="var(--black)";
    }
    else {
        showError();
    }
});

message.addEventListener('input',function(event) {
    if(message.validity.valid) {
        error.textContent="";
        error.style.backgroundColor="var(--black)";
    }
    else {
        showError();
    }
});

form.addEventListener('submit', function(event) {
    if(!name.validity.valid || !email.validity.valid || !message.validity.valid) {
        showError();
        event.preventDefault();
    }
    else {
        sendMail(event)
    }
})

function showError() {
    if(name.validity.valueMissing) {
        error.textContent = "Enter your name, please";
        console.log("err1")
    }
    else if(name.validity.tooShort) {
        error.textContent = "Your name is too short";
        console.log("err2")
    }
    else if(email.validity.valueMissing) {
        error.textContent = "Enter your Email, please";
        console.log("err3")
    }
    else if(email.validity.typeMismatch) {
        error.textContent = "Enter correct Email, please";
        console.log("err4")
    }
    else if(email.validity.tooShort) {
        error.textContent = "Your Email is too short";
        console.log("err5")
    }
    else if(message.validity.valueMissing) {
        error.textContent = "Enter your message, please";
    }
    else if(message.validity.tooShort) {
        error.textContent = "Your message is too short";
    }
    error.style.backgroundColor="var(--red)"
}

