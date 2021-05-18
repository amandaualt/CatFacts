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

    alert('Formato inválido de email');
    return false;
}
function isPassword(password, passwordConfirm) {

    if ((!password.value) || (!passwordConfirm.value))
        return false;

    if (password.value !== passwordConfirm.value)
        return false;

    return true;
}

function isValidValues(name, email, password, passwordConfirm) {
    let isValidValues = true;
    if (!isEmail(email.value)) {
        email.focus();
        email.className += ' red';
        isValidValues = false;
    }

    if (!name.value) {
        name.focus();
        name.className += ' red';
        isValidValues = false;
    }

    if (!isPassword(password, passwordConfirm)) {
        password.focus();
        password.className += ' red';
        passwordConfirm.focus();
        passwordConfirm.className += ' red';
        isValidValues = false;
    }
    return isValidValues;
}

function returnOriginal(element) {
    element.className = 'form-control';
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
            console.log('callback')
            console.log(res.token);
            window.localStorage.setItem('token', res.token);
        });
    } else {
        alert('Campos marcados com * são obrigatórios');
    }
}