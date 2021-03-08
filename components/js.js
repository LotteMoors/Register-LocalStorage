function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}



document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });


    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    document.querySelector("#register").addEventListener('click', e => {
        let password = document.querySelector("#pass");
        let passwordConfirm = document.querySelector("#passCon");
        let username = document.querySelector("#signupUsername");
        let email = document.querySelector("#eMail");


        e.preventDefault();

        if (username.value === '') {
            setInputError(username, 'Please fill out all information');
        } else if (password.value === '') {
            setInputError(password, 'Please fill out all information');
        } else if (email.value === '') {
            setInputError(email, 'Please fill out all information');
        } else if (password.value === '') {
            setInputError(password, 'Please fill out all information');
        } else if (password.value != passwordConfirm.value) {
            setInputError(passwordConfirm, 'Passwords don\'t match');
        } else {
            window.localStorage.setItem('User', username.value);
            window.localStorage.setItem('Pass', password.value);
            loginForm.classList.remove("form--hidden");
            createAccountForm.classList.add("form--hidden");
            setFormMessage(loginForm, "success", "Registration Completed!");         
        }
    });

    document.querySelector("#logBtn").addEventListener('click', e => {
        e.preventDefault();
        let userStorage = window.localStorage.getItem('User');
        let passStorage = window.localStorage.getItem('Pass');
        let user = document.querySelector("#logName");
        let pass = document.querySelector("#logPass");

        if( userStorage === user.value && passStorage === pass.value){
            
            setFormMessage(loginForm, "success", "Login successful!");
        }else {
            setFormMessage(loginForm, "error", "Incorrect password/username.");
        }



    });


    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });







});


