
import { Page, Locator } from '@playwright/test';

export class LoginPage {

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async acessar() {
    await this.page.goto('/');
  }

  async login(usuario: string, senha: string) {
    await this.username.fill(usuario);
    await this.password.fill(senha);
    await this.loginButton.click();
  }
}
