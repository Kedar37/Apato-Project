import { storeCredentials, authenticateUser } from './auth.js';

const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const password2 = document.getElementById('confirmpass');
const loginForm = document.getElementById('loginform');
const signInEmailInput = document.getElementById('loginemail');
const signInPasswordInput = document.getElementById('loginpass');
const signInSection = document.querySelector('.login');
const signUpSection = document.querySelector('.register');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, '*Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, '*Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, '*Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, '*Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "*Passwords doesn't match");
    } else {
        setSuccess(password2);
    }


    if (usernameValue && isValidEmail(emailValue) && passwordValue && (passwordValue === password2Value)) {
        // Store the user's credentials
        storeCredentials(usernameValue, emailValue, passwordValue);

        // Authenticate the user
        if (authenticateUser(usernameValue, emailValue, passwordValue)) {
            // User is authenticated, redirect to the protected area or show a success message
            window.location.href = '/protected';
        } else {
            // Display an error message
            setError(form, 'Authentication failed');
        }

        alert("Your account has been created! Please Login!")
    }
};

  // Sign-up form
  if (signUpSection.style.display === 'block') {
    if (usernameValue && isValidEmail(emailValue) && passwordValue && (passwordValue === password2Value)) {
      storeCredentials(usernameValue, emailValue, passwordValue);
    }
  }

  // Sign-in form
  if (signInSection.style.display === 'block') {
    const signInEmailValue = signInEmailInput.value.trim();
    const signInPasswordValue = signInPasswordInput.value.trim();

    if (signInEmailValue && signInPasswordValue) {
      if (authenticateUser(signInEmailValue, signInPasswordValue)) {
        window.location.href = '/index.html';
      } else {
        setError(loginForm, 'Invalid email or password');
      }
    }
  }

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});