class ThdOverlayWrapper {
    
    switchToOverlay() {
        let elem = $('div.thd-overlay.open');
        elem.waitForExist(10000);
        browser.switchToFrame($('div.thd-overlay.open iframe'));
    }

    closeAddToCartOverlay() {
        this.switchToOverlay();
        $('div#root').waitForExist(10000);
        $('div#root a[data-automation-id=closeAddToCartOverlay]').click();
        browser.switchToParentFrame();
    }

    closeConfirmPickupStoreOverlay() {
        this.switchToOverlay();
        $('div#root').waitForExist(10000);
        $('div#root div.confirm-pickup-store-wrapper a.thd-overlay__close').click();
        browser.switchToParentFrame();
    }
}

module.exports = new ThdOverlayWrapper();