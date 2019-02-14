const assert = require('assert');
const Page = require('../pageobjects/Page');
const Header = require('../pageobjects/Header');
const ProductListPage = require('../pageobjects/ProductListPage');
const ThdOverlayWrapper = require('../pageobjects/ThdOverlayWrapper');
const PageUtills = require('../pageobjects/PageUtills');
const CartPage = require('../pageobjects/CartPage');
const SigninPage = require('../pageobjects/SigninPage');

suite('Adding Items to Cart', () => {
    suiteSetup(() => {
        Page.open('https://www.homedepot.com/');
    })
    test('searching hammer in the site', () => {
        let elem = Header.searchInputField
        elem.addValue('hammer');
        assert.strictEqual(elem.getValue(), 'hammer');
        Header.searchButton.click();
    })
    test('adding first product available in PLP to cart and checking the cart', () => {
        ProductListPage.addToCartButton(ProductListPage.getFirstProductAvailable(ProductListPage.products)).click();
        if(!PageUtills.isCartPage) {
            ThdOverlayWrapper.closeAddToCartOverlay();
            expect(Header.itemCountInCart()).to.equal(1);
        } else {
            expect(CartPage.itemCount).to.equal(1);
        }
    })
    test('proceed to checkout page and guest sign in', () => {
        if(!PageUtills.isCartPage) {
            Header.cartButton.click();
            expect(CartPage.itemCount).to.equal(1);
        }
        if(!CartPage.checkoutButton.isExisting()) {
            ThdOverlayWrapper.closeConfirmPickupStoreOverlay();
        }
        CartPage.checkoutButton.click();
        SigninPage.guestLoginEmailInputField.addValue('midoriya@izuku.com');
        expect(SigninPage.guestLoginEmailInputField.getValue()).to.equal('midoriya@izuku.com');
        SigninPage.guestLoginContinueButton.click();
        browser.pause(4000);
    })
})