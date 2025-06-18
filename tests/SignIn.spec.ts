import { test, expect } from '@playwright/test';
import { SignInPage } from '../pages/SignInPage';

test('Sign In', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.goto();

  const NewSignIn = {
    userName: 'testuser123',
    password: 'password1234',
  };

  await signInPage.signIn(NewSignIn.userName, NewSignIn.password);
  await expect(page).toHaveURL('https://gitlab.testautomate.me/');
  await expect(page.getByText('Welcome to GitLab')).toBeVisible();
});

