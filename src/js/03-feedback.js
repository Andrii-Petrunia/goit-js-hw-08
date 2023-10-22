import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';


function saveFormState() {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formState));
}


function restoreFormState() {
  const savedState = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageTextarea.value = formState.message;
  }
}


feedbackForm.addEventListener('input', throttle(saveFormState, 500));


document.addEventListener('DOMContentLoaded', restoreFormState);


feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formState);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  feedbackForm.reset();
});
