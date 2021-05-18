function isEmail(email) {
    if (!email) {
        return false;
    }
    let usuario = email.substring(0, email.indexOf("@"));
    let dominio = email.substring(email.indexOf("@") + 1, email.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true;
    }
    return false;
}
function isPassword(password, passwordConfirm) {
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('passwordConfirm');

    if ((!password.value) || (!passwordConfirm.value))
        return false;

    if (password.value !== passwordConfirm.value)
        return false;

    return true;
}

function isValidValues(name, email, password, passwordConfirm) {
    let isValid = true;

    if (!isEmail(email)) {
        isValid = false;
        email.focus();
        email.className += ' red';
    }

    if (!name.value) {
        isValid = false;
        name.focus();
        name.className += ' red';
    }

    if (!isPassword(password, passwordConfirm)) {
        isValid = false;
        password.focus();
        password.className += ' red';
        passwordConfirm.focus();
        passwordConfirm.className += ' red';
    }

    alert('Campos marcados com * são obrigatórios!')

    return isValid;
}

function returnOriginal(element) {
    element.className = 'form-control';
}

function register() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;

    if (isValidValues(name, email, password, passwordConfirm)) {
        axios.post('http://localhost:3000/auth/register', {
            'name': name,
            'email': email,
            'password': password,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}