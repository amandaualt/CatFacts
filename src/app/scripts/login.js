function login() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (validateValues(email, password)) {
        $.post("http://localhost:3000/auth/login", {
            email: email.value,
            password: password.value
        }, (res) => {
            console.log(res.token);
            window.localStorage.setItem('token', res.token);
            window.localStorage.setItem('user', res.user);
            redirect('fato')
        });
    }
}

function validateValues(email, password) {
    let isValid = true;
    if (!validator.isEmail(email, 'red')) {
        isValid = false;
        console.log('Email falso')
    }

    if (!validator.validate(password, 'red')) {
        isValid = false;
        console.log('password falso')
    }
    console.log("isValid: " + isValid);
    return isValid;
}

