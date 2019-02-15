class SigninPage {

    get guestLoginEmailInputField() {
        return $('div#guest input#guestLoginValue');
    }

    get guestLoginContinueButton() {
        return $('a[ng-click*=continueAsGuest]')
    }
}

module.exports = new SigninPage();