export let error = document.querySelector("#error")

export let name = document.getElementById("name")

export let email = document.getElementById("email")

export let message = document.getElementById("message")

export const submit = document.querySelector(".submit");


const spinner = document.getElementById('spinner');

function sanitize(element) {
    let unsanitizedHTML = element.innerHTML
    let tempElement = document.createElement('div');
    tempElement.innerText = unsanitizedHTML;
    element.innerHTML = tempElement.innerHTML;
    return element
}

export function sendMail(event) {
    submit.setAttribute('disabled','true')
    event.preventDefault();
    let tempParams = {
        from_name: sanitize(name).value,
        from_email: sanitize(email).value,
        message: sanitize(message).value
    }

    emailjs.send('service_r6f0duy','template_3qvjzop',tempParams)
        .then(()=>{
                spinner.classList.remove('hide');
                error.style.backgroundColor = "green"
                error.innerText = "Great Success!!!"
                name.value='';
                email.value='';
                message.value='';
                setTimeout(()=> {
                    spinner.classList.add('hide');
                    submit.removeAttribute('disabled')
                    document.querySelector(".error-message").innerText=""
                },5*1000)},
            (error)=>{console.log("Error :",error)})
}

