'use strict';

class BasePage {
  constructor(page) {
    this.page = page;
    this.burgerMenuButton = page.getByRole('button').getByText('Open Menu');
    this.closeMenuButton = page.getByRole('button').getByText('Close Menu');
    this.menuAllItemsLink = page.getByText('All Items');
    this.menuaboutLink = page.getByText('About');
    this.menuLogoutLink = page.getByText('Logout');
    this.menuResetAppStateLink = page.getByText('Reset App State');
    this.cartLink = page.locator('span[class=shopping_cart_link]');
    this.cartBadge = page.locator('span[class=shopping_cart_badge]');
  }

  async openBurgerMenu() {
    await this.burgerMenuButton.click();
  }

  async closeBurgerMenu() {
    await this.closeMenuButton.click();
  }

  async getCartBadgeText() {
    return this.cartBadge.innerText();
  }

  async clickCartLink() {
    await this.cartBadge.click();
  }
}

module.exports = {BasePage};
