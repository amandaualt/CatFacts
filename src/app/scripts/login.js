function login() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (validateValues(email, password)) {
        $.post("/auth/login", {
            email: email.value,
            password: password.value
        }, (res) => {
            window.localStorage.setItem('token', res.token);
            window.localStorage.setItem('user', res.user.email);
            window.location = '/fato'
        });
    }
}

function validateValues(email, password) {
    let isValid = true;
    if (!validator.isEmail(email, 'red')) {
        isValid = false;
    }

    if (!validator.validate(password, 'red')) {
        isValid = false;
    }

    return isValid;
}

