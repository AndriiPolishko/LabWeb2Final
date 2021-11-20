function validateName(name) {
    return name.length > 3 && name.trim().length > 3
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateMessage(message) {
    return message.length > 7 && message.trim().length > 7
}


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
                error.textContent=''
                submit.removeAttribute('disabled')
                submit.textContent = "Send"
            }
        }
    })

    name.addEventListener('mouseenter',()=> {
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
                error.textContent=''
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
                error.textContent=''
                submit.removeAttribute('disabled')
                submit.textContent = "Send"
            }
        }
    })

    email.addEventListener('mouseenter',()=> {
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
                error.textContent=''
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
                error.textContent=''
                submit.removeAttribute('disabled')
                submit.textContent = "Send"
            }
        }
    })

    message.addEventListener('mouseenter',()=> {
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
                error.textContent=''
                submit.removeAttribute('disabled')
                submit.textContent = "Send"
            }
        }
    })
}