import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Automation Exercise - Home Page Tests', () => {

    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.open();
    });

    test('HP001 - Verify Home Page is displayed', async ({ page }) => {
        console.log('Running HP001');

        await expect(page).toHaveTitle('Automation Exercise');

        console.log('HP001 passed - Home Page is displayed');
    });

    test('HP002 - Verify Women category', async () => {
        console.log('Running HP002');

        await expect(homePage.womenCategory).toBeVisible();

        console.log('HP002 passed - Women category is visible');
    });

    test('HP003 - Verify Women subcategories', async () => {
        console.log('Running HP003');

        await homePage.clickWomenCategory();

        await expect(homePage.womenDress).toBeVisible();
        await expect(homePage.womenTops).toBeVisible();
        await expect(homePage.womenSaree).toBeVisible();

        console.log('HP003 passed - Women subcategories are visible');
    });

    test('HP004 - Verify Men category', async () => {
        console.log('Running HP004');

        await expect(homePage.menCategory).toBeVisible();

        console.log('HP004 passed - Men category is visible');
    });

    test('HP005 - Verify Men subcategories', async () => {
        console.log('Running HP005');

        await homePage.clickMenCategory();

        await expect(homePage.menTshirts).toBeVisible();
        await expect(homePage.menJeans).toBeVisible();

        console.log('HP005 passed - Men subcategories are visible');
    });

    test('HP006 - Verify Kids category', async () => {
        console.log('Running HP006');

        await expect(homePage.kidsCategory).toBeVisible();

        console.log('HP006 passed - Kids category is visible');
    });

    test('HP007 - Verify Kids subcategories', async () => {
        console.log('Running HP007');

        await homePage.clickKidsCategory();

        await expect(homePage.kidsDress).toBeVisible();
        await expect(homePage.kidsTopsShirts).toBeVisible();

        console.log('HP007 passed - Kids subcategories are visible');
    });

});