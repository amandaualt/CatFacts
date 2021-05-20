function elementAction(element, className) {
    element.focus();
    element.className += ' ' + className;
}


function returnOriginal(element) {
    element.className = 'form-control';
}


function redirect(url) {
    window.location = url;
}

const validator = {
    /**
     * Validate if email have a valid format, 
     * containing at least this pattern: user@domain.com
     * @param {Element} email A element that specifies the email address to validate 
     * @param {String} className A value to add to the property className for the elemente if it's false
     * @returns A boolean value indicating if it's valid or not.
     */
    isEmail: function (email, className) {
        if (!this.validate(email, className))
            return false;

        let usuario = email.value.substring(0, email.value.indexOf("@"));
        let dominio = email.value.substring(email.value.indexOf("@") + 1, email.length);
        if ((usuario.length >= 1) &&
            (dominio.length >= 3) &&
            (usuario.search("@") == -1) &&
            (dominio.search("@") == -1) &&
            (usuario.search(" ") == -1) &&
            (dominio.search(" ") == -1) &&
            (dominio.search(".") != -1) &&
            (dominio.indexOf(".") >= 1) &&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            console.log('Emal ok')
            return true;
        }
        return false;
    },
    /**
     * Verify if te elemnte have a value, if nots set the class in param.
     * @param {Element} element A element html 
     * @param {String} className A value to add to the property className for the elemente if it's false
     * @returns A boolean value indicating if it's valid or not.
     */
    validate: function (element, className) {
        if (!element.value) {
            elementAction(element, className);
            return false;
        }
        return true;
    },
    /**
     * Compare a password and a confirmation
     * @param {Element} password String from password of your form
     * @param {Element} passwordConfirm String from a password confirmation of your form
     * @param {String} className A value to add to the property className for the elemente if it's false
     * @returns a boolean value indicating if the passwords 
     *  are equals
     */
    comparePasswords: function (password, passwordConfirm, className) {

        if (!this.validate(password, className) && this.validate(passwordConfirm, className))
            return false;

        if (password.value !== passwordConfirm.value)
            return false;

        return true;
    }
}