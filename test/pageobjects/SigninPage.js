class SigninPage {

    get guestLoginEmailInputField() {
        console.log('Add value 2');
        return $('div#guest input#guestLoginValue');
    }

    get guestLoginContinueButton() {
        return $('a[ng-click*=continueAsGuest]')
    }
}

module.exports = new SigninPage();