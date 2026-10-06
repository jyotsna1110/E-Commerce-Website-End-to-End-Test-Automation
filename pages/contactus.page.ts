import { Page, Locator, expect } from '@playwright/test';

export class ContactUsPage {
    readonly page: Page;

    readonly contactUsLink: Locator;
    readonly homeLink: Locator;

    readonly homePageHeading: Locator;

    readonly getInTouchHeading: Locator;

    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly messageInput: Locator;
    readonly fileInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.contactUsLink = page
            .locator('a[href="/contact_us"]')
            .first();

        this.homeLink = page
            .locator('a[href="/"]')
            .first();

        this.homePageHeading = page
            .getByText(
                'Full-Fledged practice website for Automation Engineers',
                {
                    exact: true
                }
            )
            .first();

        this.getInTouchHeading = page
            .getByText(
                'Get In Touch',
                {
                    exact: true
                }
            )
            .first();

        this.nameInput = page.locator(
            'input[name="name"]'
        );

        this.emailInput = page.locator(
            'input[name="email"]'
        );

        this.subjectInput = page.locator(
            'input[name="subject"]'
        );

        this.messageInput = page.locator(
            'textarea[name="message"]'
        );

        this.fileInput = page.locator(
            'input[type="file"]'
        );

        this.submitButton = page.getByRole(
            'button',
            {
                name: 'Submit',
                exact: true
            }
        );
    }

    async open(): Promise<void> {
        console.log(
            'Opening Automation Exercise home page'
        );

        await this.page.goto(
            'https://automationexercise.com/',
            {
                waitUntil: 'domcontentloaded',
                timeout: 30000
            }
        );

        await expect(
            this.contactUsLink
        ).toBeVisible({
            timeout: 20000
        });

        console.log(
            'Home page opened successfully'
        );

        console.log(
            'Contact Us link found'
        );

        await this.contactUsLink.click();

        await expect(
            this.getInTouchHeading
        ).toBeVisible({
            timeout: 20000
        });

        console.log(
            'Contact Us page opened successfully'
        );
    }

    async verifyFormFields(): Promise<void> {
        await expect(
            this.getInTouchHeading
        ).toBeVisible();

        await expect(
            this.nameInput
        ).toBeVisible();

        await expect(
            this.emailInput
        ).toBeVisible();

        await expect(
            this.subjectInput
        ).toBeVisible();

        await expect(
            this.messageInput
        ).toBeVisible();

        await expect(
            this.fileInput
        ).toBeVisible();

        await expect(
            this.submitButton
        ).toBeVisible();

        console.log(
            'All Contact Us form fields are visible'
        );
    }

    async fillForm(): Promise<void> {
        await this.nameInput.fill(
            'Jyotsna'
        );

        await this.emailInput.fill(
            'jyotsna.test@example.com'
        );

        await this.subjectInput.fill(
            'Automation Exercise Contact Test'
        );

        await this.messageInput.fill(
            'This is a test message submitted using Playwright TypeScript POM.'
        );

        console.log(
            'Contact Us form filled successfully'
        );
    }

    async uploadFile(
        filePath: string
    ): Promise<void> {
        await this.fileInput.setInputFiles(
            filePath
        );

        console.log(
            'File uploaded successfully'
        );
    }

    async submitForm(): Promise<void> {
        console.log(
            'Submitting Contact Us form'
        );

        this.page.once(
            'dialog',
            async dialog => {
                console.log(
                    `Browser dialog: ${dialog.message()}`
                );

                await dialog.accept();

                console.log(
                    'Browser dialog accepted'
                );
            }
        );

        await this.submitButton.click();

        await this.page.waitForTimeout(3000);

        console.log(
            'Contact Us form submitted'
        );
    }

    async clickHome(): Promise<void> {
        console.log(
            'Looking for Home link'
        );

        await expect(
            this.homeLink
        ).toBeVisible({
            timeout: 20000
        });

        console.log(
            'Home link found'
        );

        await this.homeLink.evaluate(
            (element: HTMLElement) => {
                element.click();
            }
        );

        await this.page.waitForTimeout(3000);

        await expect(
            this.page
        ).toHaveURL(
            /automationexercise\.com\/(?:#.*)?$/,
            {
                timeout: 10000
            }
        );

        console.log(
            'Home page displayed successfully'
        );
    }
}