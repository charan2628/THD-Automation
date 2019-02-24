class SigninPage {

    get guestLoginEmailInputField() {
        return $('span#guestEmail input');
    }

    get guestLoginContinueButton() {
        return $('button[name=continueAsGuestButton]');
    }
}

module.exports = new SigninPage();