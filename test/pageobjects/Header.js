class Header {

    /**
     * Store Items Search Box
     * 
     * @return input element
     */
    get searchInputField() {
        return $('input#headerSearch');
    }

    /**
     * Store Items Search Box Search Button
     * 
     * @return button element
     */
    get searchButton() {
        return $('button#headerSearchButton');
    }

    /**
     * Store Finder 
     * 
     * @return store finder a element
     */
    get storeFinder() {
        return $('div#myStore > a');
    }

    /**
     * Cart
     * 
     * @return shopping cart a element
     */
    get cartButton() {
        return $('a#headerCart');
    }

    itemCountInCart() {
        let count = $('a#headerCart span.MyCart__itemCount').getText();
        return Number.parseInt(count, 10);
    }
}

module.exports = new Header();