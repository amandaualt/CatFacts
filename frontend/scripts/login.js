function login() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (validateValues(email, password)) {

        axios.post("https://animalfacts-1.herokuapp.com/auth/login", {
            email: email.value,
            password: password.value
        }).then((res) => {
            window.localStorage.setItem('token', res.data.token);
            window.localStorage.setItem('user', res.data.user.email);
            redirect('facts.html')
        }).catch((err) => {
            console.log(err)
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

