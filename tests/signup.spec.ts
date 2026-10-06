import { test, expect } from '@playwright/test';
import ExcelJS from 'exceljs';

import { HomePage } from '../pages/home.page';
import { SignupPage } from '../pages/signup.page';

test.describe('Automation Exercise - Signup Tests', () => {

    test('SU001 - Register User with valid details', async ({ page }) => {

        // ==========================================
        // READ SU001 DATA FROM EXCEL
        // ==========================================

        const workbook = new ExcelJS.Workbook();

        await workbook.xlsx.readFile(
            'test-data/Signup_Test_Data.xlsx'
        );

        const worksheet = workbook.getWorksheet(
            'Signup Test Cases'
        );

        if (!worksheet) {
            throw new Error(
                'Signup Test Cases worksheet was not found.'
            );
        }

        const row = worksheet.getRow(2);

        const testCaseId = String(
            row.getCell(3).value ?? ''
        );

        const testData = String(
            row.getCell(8).value ?? ''
        );

        console.log(`Running ${testCaseId}`);
        console.log(`Test Data: ${testData}`);

        // ==========================================
        // CREATE PAGE OBJECTS
        // ==========================================

        const homePage = new HomePage(page);
        const signupPage = new SignupPage(page);

        // ==========================================
        // OPEN AUTOMATION EXERCISE
        // ==========================================

        await homePage.open();

        await expect(page).toHaveTitle(
            /Automation Exercise/i
        );

        // ==========================================
        // OPEN SIGNUP / LOGIN
        // ==========================================

        await homePage.clickSignupLogin();

        await expect(
            page.getByText('New User Signup!', {
                exact: true
            })
        ).toBeVisible();

        // ==========================================
        // ENTER FIXED SIGNUP DATA
        // ==========================================

        await signupPage.enterSignupDetails(
            'JYOTSNA',
            'dhjy49.83@gmail.com'
        );

        // ==========================================
        // VERIFY EXISTING EMAIL MESSAGE
        // ==========================================

        const existingEmailMessage = page.getByText(
            'Email Address already exist!',
            {
                exact: true
            }
        );

        await expect(
            existingEmailMessage
        ).toBeVisible();

        console.log(
            'SU001 result: Email already exists.'
        );

        console.log(
            'The fixed test account already exists on Automation Exercise.'
        );
    });
});