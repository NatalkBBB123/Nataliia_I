import { Page, Locator } from '@playwright/test';

export class SignUpPage {
  readonly page: Page;
  readonly username: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly registerButton: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.username = this.page.getByRole('textbox', { name: 'Username' });
    this.firstName = this.page.getByRole('textbox', { name: 'First name' });
    this.lastName = this.page.getByRole('textbox', { name: 'Last name' });
    this.email = this.page.getByRole('textbox', { name: 'Email'   });
    this.password = this.page.getByLabel('Password');
    this.registerButton = this.page.getByRole('button', { name: 'Register' });
  }
      async goto() {
    await this.page.goto('https://gitlab.testautomate.me/users/sign_up'); 
  }

async signUp(username: string, firstname: string, lastname: string, email:string, password: string) {
        await this.username.fill(username)
        await this.firstName.fill(firstname)
        await this.lastName.fill(lastname)
        await this.email.fill(email)
        await this.password.fill(password)
        await this.registerButton.click()
    }
}