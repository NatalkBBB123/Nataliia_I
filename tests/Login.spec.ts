import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  await page.goto('https://gitlab.testautomate.me/users/sign_in')
  });

test('Login', async ({ page }) => {
  const username = page.getByLabel('Username or email');
  const password = page.getByLabel('Password');

  await username.fill('natatest@gmail.com');  
  await password.fill('test1234');
  await page.getByRole('button', {name: 'Sign in' }).click();  
  await expect(page).toHaveURL('https://gitlab.testautomate.me/') 
  await expect(page.getByText('Welcome to GitLab')).toBeVisible();
})
