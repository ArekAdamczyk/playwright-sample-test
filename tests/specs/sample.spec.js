'use strict';

const {test/* , expect */} = require('@playwright/test');
const {BasePage} = require('../pages/index');

test.describe('Swag Labs test sample', () => {
  test('should list items, add to card and checkout', async ({page}) => {
    const basePage = new BasePage(page);

    await page.goto('/inventory.html');
    await basePage.openBurgerMenu();
    await basePage.closeBurgerMenu();
  });
});

