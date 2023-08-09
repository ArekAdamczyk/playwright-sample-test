'use strict';

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsSubtitle = page.locator('span[text="Products"]');
    this.sortDropdown = page.locator('data-test="product_sort_container"');
    this.itemName = 'div[class=inventory_item_name]';
    this.itemDescription = 'div[class=inventory_item_description]';
    this.pricebar = 'div[class=pricebar]';
    this.addToCartButton = page.getByRole('button').getByText('Add to cart');
  }

  async assertProductsOpened() {
    await this.productsSubtitle;
  }

  async getAllItemNames() {
    const itemList = await this.page.$$(this.itemName);
    const itemListTextArray = [];
    for (const item of itemList) {
      itemListTextArray.push(await item.innerText());
    }

    return itemListTextArray;
  }

  async clickAddToCartButtonByItemName(name) {
    await this.page
        .locator(this.itemDescription)
        .filter({hasText: name})
        .locator(this.pricebar)
        .locator(this.addToCartButton)
        .click();
  }
}

module.exports = {ProductsPage};
