class ProductListPage {

    get products() {
        return $$('div[data-rectype=product]');
    }

    canAddToCart(elem) {
        return elem.$('div.plp-pod__footer div.pod-plp__bttn-area div.pod-plp__atc-bttn a').isExisting();
    }

    getFirstProductAvailable(elems) {
        for(let i in elems)
            if(this.canAddToCart(elems[i])) return elems[i];
    }

    addToCartButton(elem) {
        return elem.$('div.plp-pod__footer div.pod-plp__bttn-area div.pod-plp__atc-bttn');
    }
}

module.exports = new ProductListPage();