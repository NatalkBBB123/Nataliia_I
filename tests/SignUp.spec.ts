import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';
import { faker } from '@faker-js/faker';

test('Sign Up', async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  await signUpPage.goto();

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const NewsignUp = {
    username: `${firstName}${lastName}`.toLowerCase() + Date.now(),
    firstName,
    lastName,
    email: `testuser${Date.now()}@example.com`,
    password: 'password1234',
  };

  await signUpPage.signUp(NewsignUp.username,NewsignUp.firstName, NewsignUp.lastName, NewsignUp.email, NewsignUp.password);
  await expect(page).toHaveURL('https://gitlab.testautomate.me/users/sign_up/welcome');
});
