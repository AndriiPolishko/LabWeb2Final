export let error = document.querySelector("#error")

export let name = document.getElementById("name")

export let email = document.getElementById("email")

export let message = document.getElementById("message")

export const submit = document.querySelector(".submit");


const spinner = document.getElementById('spinner');

export function sendMail(event) {
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
                error.style.backgroundColor = "green"
                error.innerText = "Great Success!!!"
                name.value='';
                email.value='';
                message.value='';
                setTimeout(()=>
                        document.querySelector(".error-message").innerText="",
                    5*1000)},
            (error)=>{console.log("Error :",error)})
}

