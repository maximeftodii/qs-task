import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class UserPage extends BasePage {
    private readonly userDropdown = "//a[@id='navbarDropdown_cUser']"

    constructor(page: Page) {
        super(page);
    }

    async verifyUserLogin() {
        await this.page.locator(this.userDropdown).isVisible();
        const loggedUser = await this.page.locator(this.userDropdown).innerText();
        console.log("User " + loggedUser + "is logged in.")
    }
}