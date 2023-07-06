'use strict';

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsSubtitle = page.locator('span[text="Products"]');
    this.sortDropdown = page.locator('data-test="product_sort_container"');
    this.item = page.locator('div[class=inventory_item]');
  }

  async assertProductsOpened() {
    await this.productsSubtitle;
  }

  async getAllItems() {
    const itemList = await this.page.$$(item);
    const itemListText = itemList.getText();

    return itemListText;
  }
}

module.exports = {ProductsPage};
