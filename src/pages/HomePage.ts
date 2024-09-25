import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    private readonly loginButton = "//a[@class='btn btn-elegant btn-rounded my-3 waves-effect waves-light']";
    private readonly emailInputField = "//input[@id='UserName']";
    private readonly passwordField = "(//input[@id='Password'])[1]";
    private readonly loginFormButton = "//button[contains(@class, 'btn') and contains(@class, 'btn-light-green')]";

    constructor(page: Page) {
        super(page);
    }

    async accountLogin(email: string, password: string) {
        await this.page.locator(this.loginButton).click();
        await this.page.locator(this.emailInputField).fill(email);
        await this.page.locator(this.passwordField).fill(password);
        await this.page.locator(this.loginFormButton).click();
    }

    async getPageTitle() {
        return this.page.title();
    }

}

