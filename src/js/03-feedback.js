import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const keyForm = "feedback-form-state";
let formValues = JSON.parse(localStorage.getItem(keyForm));

const { email, message } = form.elements;

const saveLocal = throttle(event => {
    formValues = { email: email.value, message: message.value };
    localStorage.setItem(keyForm, JSON.stringify(formValues));
}, 500);

if (formValues) {
    email.value = formValues.email;
    message.value = formValues.message;
}

function onSubmit(event) {
    event.preventDefault();
    localStorage.clear;

    if (email.value === '' || message.value === '') {
        return console.log('All fields must be filled');
    }
    console.log(formValues);
    event.currentTarget.reset();
}

form.addEventListener('input', saveLocal);
form.addEventListener('submit', onSubmit);