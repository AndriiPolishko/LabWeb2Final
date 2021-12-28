function validateName(name) {
    return name.trim().length > 3
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

import {error, name,email,message, submit} from "../sendMail.js";

function mouseMove(part,validateFunc) {
    if(!validateFunc(part.value)) {
        block(`${part.id}`)
    }
    else {
        if(error.textContent !== `${part.id} is incorrect`)
            submit.textContent = "Blocked"
        else {
            //error.classList.add('hide')
            error.textContent=''
            error.style.backgroundColor = "inherit"
            submit.removeAttribute('disabled')
            submit.textContent = "Send"
        }
    }
}

function val(part,validateFunc) {

    part.addEventListener('mouseleave',()=> {
        mouseMove(part,validateFunc)
    })

    part.addEventListener('mouseenter',()=> {
        mouseMove(part,validateFunc)
    })

}

function block(part) {
    error.classList.remove('hide')
    error.textContent=`${part} is incorrect`
    error.style.backgroundColor = "red"
    submit.setAttribute('disabled','true')
    submit.textContent = "Blocked"
}

export function NameValidation() {
    val(name,validateName);
}

export function EmailValidation() {
    val(email,validateEmail)
}

export function MessageValidation() {
    val(message,validateName)
}

