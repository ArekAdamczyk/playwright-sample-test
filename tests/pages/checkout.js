'use strict';

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutInfoSubtitle = page.getByText('Checkout: Your Information');
    this.firstNameInput = page.locator('input[placeholder="First Name"]');
    this.lastNameInput = page.locator('input[placeholder="Last Name"]');
    this.zipCodeInput = page.locator('input[placeholder="Zip/Postal Code"]');
    this.cancelButton = page.getByRole('button').getByText('Cancel');
    this.continueButton = page.locator('input[value=Continue]');
    this.checkoutOverviewSubtitle = page.getByText('Checkout: Overview');
    this.finishButton = page.getByRole('button').getByText('Finish');
  }

  async inputFirstName(name) {
    await this.firstNameInput.fill(name);
  }

  async inputLastName(name) {
    await this.lastNameInput.fill(name);
  }

  async inputZipCode(code) {
    await this.zipCodeInput.fill(code);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async clickFinish() {
    await this.fnishButton.click();
  }
}

module.exports = {CheckoutPage};
