function forgotPassword(email) {
    axios.post('/auth/forgot_password', {
        "email": email,
    })
        .then(function (response) {
            window.localStorage.setItem("email", email)
            window.location = 'recupera-senha'
        })
        .catch(function (error) {
            console.log(error)
        });
}

function sendToken() {
    const email = document.getElementById('email');
    if (validator.isEmail(email, 'red')) {
        forgotPassword(email.value);
    }
}

function sendPassword() {
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('passwordConfirm');
    const token = document.getElementById('token');
    const email = window.localStorage.getItem('email')


    if (validator.comparePasswords(password, passwordConfirm, 'red')) {
        resetPassword(password.value, token.value, email);
    }
}

function resetPassword(password, token, email) {
    axios.post('/auth/reset_password', {
        "password": password,
        "token": token,
        "email": email
    })
        .then(function (response) {
            window.localStorage.removeItem("email")
            window.location = '/login'
        })
        .catch(function (error) {
        });
}