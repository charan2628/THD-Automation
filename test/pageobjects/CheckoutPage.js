class CheckoutPage {

    get firstNameInputField() {
        return $('input#firstName');
    }

    get lastNameInputField() {
        return $('input#lastName');
    }

    get phoneInputField() {
        return $('input#phone');
    }

    get shippingAddressInputField() {
        return $('input#shippingAddress');
    }

    get zipInputField() {
        return $('span[name=zipInput] > input');
    }

    get useAsBillingAddressCheckBox() {
        return $('input#hdCheckBox_1');
    }

    get cardNumberInputField() {
        return $('input#cardNumber');
    }

    setCreditCardExpirationMonth(month) {
        $(`select#ccMonth option[label="${month}"]`).click();
    }

    setCreditCardExpirationYear(year) {
        $(`select#ccYear option[label="${year}"]`).click();
    }

    get cvvInputField() {
        return $('input#cvv');
    }
}

module.exports = new CheckoutPage();