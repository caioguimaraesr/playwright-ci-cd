const { test, expect } = require('@playwright/test');
const Page = require('../pages/Page');

test.use({ screenshot: 'off', video: 'off', trace: 'off' });

test('realiza login com uma conta cadastrada', async ({ page }) => {
  const email = process.env.DEMO_WEBSHOP_EMAIL;
  const password = process.env.DEMO_WEBSHOP_PASSWORD;

  if (!email || !password) {
    throw new Error('Defina DEMO_WEBSHOP_EMAIL e DEMO_WEBSHOP_PASSWORD para executar o teste de login.');
  }

  const app = new Page(page);
  await app.login.open();
  await app.login.login(email, password);

  await expect(app.login.accountLink(email)).toBeVisible();
  await expect(app.login.logoutLink).toBeVisible();
});
