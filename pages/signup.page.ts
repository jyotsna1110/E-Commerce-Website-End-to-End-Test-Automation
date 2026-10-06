import { Page, Locator } from '@playwright/test';

export class SignupPage {
    readonly page: Page;

    // Signup page
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupButton: Locator;

    // Account Information
    readonly mrRadio: Locator;
    readonly mrsRadio: Locator;
    readonly passwordInput: Locator;
    readonly daySelect: Locator;
    readonly monthSelect: Locator;
    readonly yearSelect: Locator;

    // Preferences
    readonly newsletterCheckbox: Locator;
    readonly specialOffersCheckbox: Locator;

    // Address Information
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly addressInput: Locator;
    readonly address2Input: Locator;
    readonly countrySelect: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;

    // Account Creation
    readonly createAccountButton: Locator;
    readonly accountCreatedMessage: Locator;
    readonly continueButton: Locator;

    // Login / Account
    readonly loggedInUser: Locator;
    readonly deleteAccountLink: Locator;
    readonly accountDeletedMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // Signup page
        this.nameInput = page.locator('input[data-qa="signup-name"]');

        this.emailInput = page.locator(
            'input[data-qa="signup-email"]'
        );

        this.signupButton = page.getByRole('button', {
            name: 'Signup'
        });

        // Account Information
        this.mrRadio = page.locator('#id_gender1');

        this.mrsRadio = page.locator('#id_gender2');

        this.passwordInput = page.locator(
            'input[data-qa="password"]'
        );

        this.daySelect = page.locator(
            'select[data-qa="days"]'
        );

        this.monthSelect = page.locator(
            'select[data-qa="months"]'
        );

        this.yearSelect = page.locator(
            'select[data-qa="years"]'
        );

        // Preferences
        this.newsletterCheckbox = page.locator(
            '#newsletter'
        );

        this.specialOffersCheckbox = page.locator(
            '#optin'
        );

        // Address Information
        this.firstNameInput = page.locator(
            'input[data-qa="first_name"]'
        );

        this.lastNameInput = page.locator(
            'input[data-qa="last_name"]'
        );

        this.companyInput = page.locator(
            'input[data-qa="company"]'
        );

        this.addressInput = page.locator(
            'input[data-qa="address"]'
        );

        this.address2Input = page.locator(
            'input[data-qa="address2"]'
        );

        this.countrySelect = page.locator(
            'select[data-qa="country"]'
        );

        this.stateInput = page.locator(
            'input[data-qa="state"]'
        );

        this.cityInput = page.locator(
            'input[data-qa="city"]'
        );

        this.zipcodeInput = page.locator(
            'input[data-qa="zipcode"]'
        );

        this.mobileNumberInput = page.locator(
            'input[data-qa="mobile_number"]'
        );

        // Account Creation
        this.createAccountButton = page.getByRole('button', {
            name: 'Create Account'
        });

        this.accountCreatedMessage = page.getByText(
            'ACCOUNT CREATED!',
            {
                exact: false
            }
        );

        this.continueButton = page.getByRole('link', {
            name: 'Continue'
        });

        // Login / Account
        this.loggedInUser = page.getByText(
            'Logged in as',
            {
                exact: false
            }
        );

        this.deleteAccountLink = page.getByRole('link', {
            name: 'Delete Account'
        });

        this.accountDeletedMessage = page.getByText(
            'ACCOUNT DELETED!',
            {
                exact: false
            }
        );
    }

    // Enter name and email on Signup page
    async enterSignupDetails(
        name: string,
        email: string
    ): Promise<void> {

        await this.nameInput.fill(name);

        await this.emailInput.fill(email);

        await this.signupButton.click();
    }

    // Select Mr. or Mrs.
    async selectTitle(
        title: string
    ): Promise<void> {

        if (title === 'Mr.') {
            await this.mrRadio.check();
        }

        if (title === 'Mrs.') {
            await this.mrsRadio.check();
        }
    }

    // Enter password and date of birth
    async enterAccountInformation(
        password: string,
        day: string,
        month: string,
        year: string
    ): Promise<void> {

        await this.passwordInput.fill(password);

        await this.daySelect.selectOption(day);

        await this.monthSelect.selectOption(month);

        await this.yearSelect.selectOption(year);
    }

    // Select newsletter and special offers
    async selectPreferences(
        newsletter: boolean,
        specialOffers: boolean
    ): Promise<void> {

        if (newsletter) {
            await this.newsletterCheckbox.check();
        }

        if (specialOffers) {
            await this.specialOffersCheckbox.check();
        }
    }

    // Enter address information
    async enterAddressInformation(
        firstName: string,
        lastName: string,
        company: string,
        address: string,
        address2: string,
        country: string,
        state: string,
        city: string,
        zipcode: string,
        mobileNumber: string
    ): Promise<void> {

        await this.firstNameInput.fill(firstName);

        await this.lastNameInput.fill(lastName);

        await this.companyInput.fill(company);

        await this.addressInput.fill(address);

        await this.address2Input.fill(address2);

        await this.countrySelect.selectOption({
            label: country
        });

        await this.stateInput.fill(state);

        await this.cityInput.fill(city);

        await this.zipcodeInput.fill(zipcode);

        await this.mobileNumberInput.fill(mobileNumber);
    }

    // Create account
    async createAccount(): Promise<void> {

        await this.createAccountButton.click();
    }

    // Click Continue after account creation
    async clickContinue(): Promise<void> {

        await this.continueButton.click();
    }

    // Delete account
    async deleteAccount(): Promise<void> {

        await this.deleteAccountLink.click();
    }
}