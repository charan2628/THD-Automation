const assert = require('assert');
const Page = require('../pageobjects/Page');
const Header = require('../pageobjects/Header');
const ProductListPage = require('../pageobjects/ProductListPage');
const ThdOverlayWrapper = require('../pageobjects/ThdOverlayWrapper');
const PageUtills = require('../pageobjects/PageUtills');

suite('Adding Items to Cart', () => {
    suiteSetup(() => {
        Page.open('https://www.homedepot.com/');
    })
    test('searching hammer in the site', () => {
        let elem = Header.inputElement
        elem.addValue('hammer');
        assert.strictEqual(elem.getValue(), 'hammer');
        Header.searchButton.click();
    })
    test('adding first product available to cart and checking the cart', () => {
        ProductListPage.addToCartButton(ProductListPage.getFirstProductAvailable(ProductListPage.products)).click();
        if(!PageUtills.isCartPage)
            ThdOverlayWrapper.closeAddToCartOverlay();
        Header.cartButton.click();
    })
})