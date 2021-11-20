function validateName(name) {
    return name.length > 3 && name.trim().length > 3
}


export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validateMessage(message) {
    return message.length > 7 && message.trim().length > 7
}

/*
export function validateNumber(number) {
    return /^\d+$/.test(number) && number.length === 11;
}
*/

import {error, name,email,message, submit} from "../sendMail.js";

export function NameValidation() {

    name.addEventListener('mouseleave',()=> {
        if(!validateName(name.value)) {
            error.classList.remove('hide')
            error.textContent="Name is incorrect"
            submit.setAttribute('disabled','true')
            submit.textContent = "Blocked"
        }
        else {
            if(error.textContent==="Message is incorrect" || error.textContent==="Email is incorrect")
                submit.textContent = "Blocked"
            else {
                error.classList.add('hide')
                submit.removeAttribute('disabled')
                submit.textContent = "Send"
            }
        }
    })
}

export function EmailValidation() {
    email.addEventListener('mouseleave',()=> {
        if(!validateEmail(email.value)) {
            error.classList.remove('hide')
            error.textContent="Email is incorrect"
            submit.setAttribute('disabled','true')
            submit.textContent = "Blocked"
        }
        else {
            if(error.textContent==="Message is incorrect" || error.textContent==="Name is incorrect")
                submit.textContent = "Blocked"
            else {
                error.classList.add('hide')
                submit.removeAttribute('disabled')
                submit.textContent = "Send"
            }
        }
    })
}

export function MessageValidation() {
    message.addEventListener('mouseleave',()=> {
        if(!validateMessage(message.value)) {
            error.classList.remove('hide')
            error.textContent="Message is incorrect"
            submit.setAttribute('disabled','true')
            submit.textContent = "Blocked"
        }
        else {
            if(error.textContent==="Email is incorrect" || error.textContent==="Name is incorrect")
                submit.textContent = "Blocked"
            else {
                error.classList.add('hide')
                submit.removeAttribute('disabled')
                submit.textContent = "Send"
            }
        }
    })
}