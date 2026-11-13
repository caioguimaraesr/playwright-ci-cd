const DemoWebShopLoginPage = require('./DemoWebShopLoginPage');

class Page {
  constructor(page) {
    this.login = new DemoWebShopLoginPage(page);
  }
}

module.exports = Page;
