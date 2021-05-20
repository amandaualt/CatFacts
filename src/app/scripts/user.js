function isValidValues(name, email, password, passwordConfirm) {
    let isValidValues = true;
    if (!validator.isEmail(email, 'red')) {
        isValidValues = false;
    }
    isValidValues = false;


    if (!validator.validate(name, 'red')) {
        isValidValues = false;
    }

    if (!validator.comparePasswords(password, passwordConfirm, 'red')) {
        isValidValues = false;
    }

    return isValidValues;
}


function register() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('passwordConfirm');

    if (isValidValues(name, email, password, passwordConfirm)) {
        $.post("http://localhost:3000/auth/register", {
            name: name.value,
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


