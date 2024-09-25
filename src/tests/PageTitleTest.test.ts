import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserPage } from '../pages/UserPage'
import { config } from '../config';

test.describe('Page Title and Login Test', () => {
    let homePage: HomePage;
    let userPage: UserPage;

    test.beforeAll(async ({ browser }) => {
        const page = await browser.newPage();
        homePage = new HomePage(page);
        userPage = new UserPage(page);

        await homePage.goto(config.baseUrl);
        await homePage.waitForLoad();
    });

    test('Check Page Title', async () => {
        const title = await homePage.getPageTitle();
        expect(title).toBe('Home Page -');
    });

    test('Login Test', async () => {
        await homePage.accountLogin(config.credentials.email, config.credentials.password);
        await userPage.verifyUserLogin();
    });
});