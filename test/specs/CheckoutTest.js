const assert = require('assert');
const Page = require('../pageobjects/Page');
const Header = require('../pageobjects/Header');
const ProductListPage = require('../pageobjects/ProductListPage');
const ThdOverlayWrapper = require('../pageobjects/ThdOverlayWrapper');
const PageUtills = require('../pageobjects/PageUtills');
const CartPage = require('../pageobjects/CartPage');
const SigninPage = require('../pageobjects/SigninPage');
const CheckOutPage = require('../pageobjects/CheckoutPage');

suite('SCENARIO: Placing Order', () => {

    suiteSetup(() => {
        Page.open('https://www.homedepot.com/');
    })

    test('WHEN: I search for an item', () => {
        let elem = Header.searchInputField
        elem.addValue('hammer');
        assert.strictEqual(elem.getValue(), 'hammer');
        Header.searchButton.click();
    })

    test('AND: I add the first item available to cart', () => {
        ProductListPage.addToCartButton(ProductListPage.getFirstProductAvailable(ProductListPage.products)).click();
    })

    test('THEN: I should have one item in cart', () => {
        if(!PageUtills.isCartPage) {
            ThdOverlayWrapper.closeAddToCartOverlay();
        }
        expect(Header.itemCountInCart()).to.equal(1);
    })

    test('THEN: I proceed to checkout page and guest sign in', () => {
        if(!PageUtills.isCartPage) {
            Header.cartButton.click();
        }
        CartPage.checkoutButton.click();
        if(!PageUtills.isSigninPage) {
            ThdOverlayWrapper.closeConfirmPickupStoreOverlay();
        }
        SigninPage.guestLoginEmailInputField.addValue('midoriya@izuku.com');
        expect(SigninPage.guestLoginEmailInputField.getValue()).to.equal('midoriya@izuku.com');
        SigninPage.guestLoginContinueButton.click();
        browser.pause(4000);
    })

    test('THEN: I fill the checkout page form and places the order', () => {
        CheckOutPage.firstNameInputField.addValue('Light');
        CheckOutPage.lastNameInputField.addValue('Yagami');
        CheckOutPage.phoneInputField.addValue('9999999999');
        CheckOutPage.shippingAddressInputField.addValue('Japan');
        CheckOutPage.zipInputField.addValue('52220');
        if(!CheckOutPage.useAsBillingAddressCheckBox.isSelected()) {
            CheckOutPage.useAsBillingAddressCheckBox.click();
        }
        CheckOutPage.cardNumberInputField.addValue('1234567890123');
        CheckOutPage.setCreditCardExpirationMonth('07 - July');
        CheckOutPage.setCreditCardExpirationYear('2019');
        CheckOutPage.cvvInputField.addValue('123');
        browser.pause(4000);
    })
})