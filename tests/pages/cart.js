'use strict';

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartPageSubtitle = page.getByText('Your Cart');
    this.continueButton = page.getByRole('button').getByText('Continue Shopping');
    this.checkoutButton = page.getByRole('button').getByText('Checkout');
    this.cartItemName = 'div[class=inventory_item_name]';
  }

  async assertCartPageOpened() {
    await this.cartPageSubtitle();
  }

  async getAllCartListItemNames() {
    const itemList = await this.page.$$(this.cartItemName);
    const itemNameArray = [];
    for (const item of itemList) {
      itemNameArray.push(await item.innerText());
    }

    return itemNameArray;
  }

  async clickContinueShopping() {
    await this.continueButton.click();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = {CartPage};
