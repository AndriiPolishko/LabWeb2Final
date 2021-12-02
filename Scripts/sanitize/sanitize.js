import sanitizeHtml from '../sanitize-html';

export function sanitizeFields(name,email,message) {
    name.innerHTML=sanitizeHtml(name.innerHTML);
    email.innerHTML=sanitizeHtml(email.innerHTML);
    message.innerHTML=sanitizeHtml(message.innerHTML);
    return {
        from_name: name.value,
        from_email: email.value,
        message: message.value
    }
}