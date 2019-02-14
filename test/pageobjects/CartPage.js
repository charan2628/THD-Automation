const PageUtills = require('../pageobjects/PageUtills');

class CartPage {

    get checkoutButton() {
        return $('div#root div.cart-main-container div.toggleCertona div.cart-checkout-secondary div[data-automation-id=cartMainSummaryCheckoutOptionsContainer] form > button');
    }

    get itemCount() {
        if(PageUtills.isCartPage) 
            $('div#root div.cart-main-container div.toggleCertona div.cart-checkout-secondary span.cart-secondary-num').waitForExist(10000);
        let count = $('div#root div.cart-main-container div.toggleCertona div.cart-checkout-secondary span.cart-secondary-num').getText();
        return Number.parseInt(count, 10);
    }
}

module.exports = new CartPage();