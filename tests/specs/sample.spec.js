'use strict';

const {test, expect} = require('@playwright/test');
const {BasePage, ProductsPage, CartPage} = require('../pages/index');
const {CheckoutHelper} = require('../helpers/checkoutHelper');

test.describe('Swag Labs test sample', () => {
  test('should list items, add to card and checkout', async ({page}) => {
    const basePage = new BasePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutHelper = new CheckoutHelper(page);

    await page.goto('/inventory.html');
    const itemNames = await productsPage.getAllItemNames();
    for (const item of itemNames) {
      await productsPage.clickAddToCartButtonByItemName(item);
    }

    const cartBadgeNumber = await basePage.getCartBadgeText();

    expect(String(itemNames.length)).toEqual(cartBadgeNumber);

    await basePage.clickCartLink();
    const cartItems = await cartPage.getAllCartListItemNames();

    expect(itemNames).toEqual(cartItems);

    await cartPage.clickCheckout();
    await checkoutHelper.inputCheckoutInfo();

    // check cart on overview
    // check total value
    // click finish
    //
  });
});

