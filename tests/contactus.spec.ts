import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pages/contactus.page';

test.describe(
    'Automation Exercise - Contact Us Tests',
    () => {

        let contactUsPage: ContactUsPage;

        test.beforeEach(async ({ page }) => {
            contactUsPage =
                new ContactUsPage(page);

            await contactUsPage.open();
        });

        test(
            'CU001 - Verify Contact Us page is displayed',
            async () => {

                console.log(
                    'Running CU001'
                );

                await expect(
                    contactUsPage.getInTouchHeading
                ).toBeVisible();

                console.log(
                    'CU001 passed - Contact Us page is displayed'
                );
            }
        );

        test(
            'CU002 - Verify Contact Us form fields are displayed',
            async () => {

                console.log(
                    'Running CU002'
                );

                await contactUsPage.verifyFormFields();

                console.log(
                    'CU002 passed - Contact Us form fields are displayed'
                );
            }
        );

        test(
            'CU003 - Verify Contact Us form can be filled',
            async () => {

                console.log(
                    'Running CU003'
                );

                await contactUsPage.fillForm();

                console.log(
                    'CU003 passed - Contact Us form can be filled'
                );
            }
        );

        test(
            'CU004 - Verify Contact Us form submission',
            async () => {

                console.log(
                    'Running CU004'
                );

                await contactUsPage.fillForm();

                await contactUsPage.uploadFile(
                    'package.json'
                );

                await contactUsPage.submitForm();

                console.log(
                    'CU004 passed - Contact Us form submitted successfully'
                );
            }
        );

        test(
            'CU005 - Verify Home button after Contact Us submission',
            async () => {

                console.log(
                    'Running CU005'
                );

                await contactUsPage.fillForm();

                await contactUsPage.uploadFile(
                    'package.json'
                );

                await contactUsPage.submitForm();

                await contactUsPage.clickHome();

                console.log(
                    'CU005 passed - Home page displayed after Contact Us submission'
                );
            }
        );
    }
);