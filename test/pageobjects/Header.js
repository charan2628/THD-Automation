class Header {

    /**
     * Store Items Search Box
     * 
     * @return input element
     */
    get inputElement() {
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
}

module.exports = new Header();