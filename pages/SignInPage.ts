import { Page, Locator } from '@playwright/test';

export class SignInPage {
  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = this.page.getByLabel('Username or email');
    this.password = this.page.getByLabel('Password');
    this.signInButton = this.page.getByRole('button', {name: 'Sign in' }); 

    }
      async goto() {
    await this.page.goto('https://gitlab.testautomate.me/users/sign_in'); 
  }

  async signIn(username: string, password: string) {
        await this.userName.fill(username)
        await this.password.fill(password)
        await this.signInButton.click()
    }
}