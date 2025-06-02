import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://gitlab.testautomate.me/users/sign_in')
  });

function generateRandomEmail(): string {
    const domain = ['gmail.com'];
    const randomString = Math.random().toString(36).substring(2, 10);
    return `${randomString}@${domain}`;
}

function generateRandomUsername(): string {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `name_${randomString}`;
}

test('Registration', async ({ page }) => {
    const registrationform = page.getByRole('link', { name: 'Register now' });
    await registrationform.click();
    await expect(page).toHaveURL('https://gitlab.testautomate.me/users/sign_up');
    
    const firstName = page.getByRole('textbox', { name: 'First name' });
    const lastName = page.getByRole('textbox', { name: 'Last name' });
    const username = page.getByRole('textbox', { name: 'Username' });
    const email = page.getByRole('textbox', { name: 'Email' });
    const password = page.getByLabel('Password');
    
    await firstName.fill('Autotest');
    await lastName.fill('User');
    await username.fill(generateRandomUsername());
    await email.fill(generateRandomEmail());
    await password.fill('test1234');
    
    await page.getByRole('button', { name: 'Register' }).click();
    await expect(page).toHaveURL('https://gitlab.testautomate.me/users/sign_up/welcome');
});