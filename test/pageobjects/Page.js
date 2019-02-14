class Page {
    constructor() {
    }

    open(path) {
        browser.url(path);
        browser.maximizeWindow();
    }
}
module.exports = new Page();