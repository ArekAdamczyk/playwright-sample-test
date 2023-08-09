'use strict';

const {CheckoutPage} = require('../pages/index');

class CheckoutHelper {
  constructor(page) {
    this.checkoutPage = new CheckoutPage(page);
  }

  async inputCheckoutInfo(
      firstName = 'John',
      lastName = 'Doe',
      code = '00-000',
  ) {
    await this.checkoutPage.inputFirstName(firstName);
    await this.checkoutPage.inputLastName(lastName);
    await this.checkoutPage.inputZipCode(code);
    await this.checkoutPage.clickContinue();
  }
}

module.exports = {CheckoutHelper};
