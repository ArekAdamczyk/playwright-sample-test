'use strict';

const {test: setup} = require('@playwright/test');
const {LoginHelper} = require('./helpers/loginHelper');
const {ProductsPage} = require('./pages/index');
const {standard} = require('../playwright/.auth/userCredentials');

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({page}) => {
  const loginHelper = new LoginHelper(page);
  const productsPage = new ProductsPage(page);

  await page.goto('/');
  await loginHelper.login(standard.name, standard.password);
  await productsPage.assertProductsOpened();

  await page.context().storageState({path: authFile});
});
