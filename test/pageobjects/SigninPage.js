class SigninPage {

    get guestLoginEmailInputField() {
        return $('input#guestLoginValue');
    }

    get guestLoginContinueButton() {
        return $('a[ng-click*=continueAsGuest]')
    }
}

module.exports = new SigninPage();