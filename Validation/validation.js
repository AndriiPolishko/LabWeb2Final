function validateName(name) {
    return name.length > 3 && name.trim().length > 3
}
export {validateName}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export {validateEmail}

function validateMessage(message) {
    return message.length > 10 && message.trim().length > 10
}
export {validateMessage}

function validateNumber(number) {
    return /^\d+$/.test(number) && number.length === 11;
}
export {validateNumber}

