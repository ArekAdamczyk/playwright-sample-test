'use strict';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('text="Swag Labs"');
    this.usernameInput = page.locator('input[placeholder=Username]');
    this.passwordInput = page.locator('input[placeholder=Password]');
    this.loginButton = page.locator('input[value=Login]');
  }

  async assertPageTitle() {
    await this.pageTitle;
  }

  async inputUsername(name) {
    await this.usernameInput.fill(name);
  }

  async inputPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
};

module.exports = {LoginPage};
