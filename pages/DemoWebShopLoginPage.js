class DemoWebShopLoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByLabel('Email:');
    this.passwordInput = page.getByLabel('Password:');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.logoutLink = page.getByRole('link', { name: 'Log out' });
  }

  async open() {
    await this.page.goto('https://demowebshop.tricentis.com/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  accountLink(email) {
    return this.page.getByRole('link', { name: email, exact: true });
  }
}

module.exports = DemoWebShopLoginPage;
