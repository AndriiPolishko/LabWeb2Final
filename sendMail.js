function sendMail(params) {
    let tempParams = {
        from_name:document.getElementById("name").value,
        from_email:document.getElementById("email").value,
        message:document.getElementById("message").value
    }
    emailjs.send('service_r6f0duy','template_3qvjzop',tempParams)
        .then((res)=> {
            console.log(res.status)
        })
}