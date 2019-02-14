class PageUtills {
    get isCartPage() {
        while(browser.getTitle() === '') {}
        if(browser.getTitle().toLowerCase().includes('shopping cart')) return true;
        return false;
    }

    get isSigninPage() {
        while(browser.getTitle() === '') {}
        if(browser.getTitle().toLowerCase().includes('signin')) return true;
        return false;
    }
}

module.exports = new PageUtills();