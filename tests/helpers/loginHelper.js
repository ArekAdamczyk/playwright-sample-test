'use strict';

const {LoginPage} = require('../pages/index');

class LoginHelper {
  constructor(page) {
    this.loginPage = new LoginPage(page);
  }

  async login(name, password) {
    await this.loginPage.assertPageTitle();
    await this.loginPage.inputUsername(name);
    await this.loginPage.inputPassword(password);
    await this.loginPage.clickLoginButton();
  }
};

module.exports = {LoginHelper};
