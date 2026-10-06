import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    // ==========================================
    // HOME PAGE
    // ==========================================

    readonly signupLoginLink: Locator;

    // ==========================================
    // MAIN CATEGORIES
    // ==========================================

    readonly womenCategory: Locator;
    readonly menCategory: Locator;
    readonly kidsCategory: Locator;

    // ==========================================
    // WOMEN SUBCATEGORIES
    // ==========================================

    readonly womenDress: Locator;
    readonly womenTops: Locator;
    readonly womenSaree: Locator;

    // ==========================================
    // MEN SUBCATEGORIES
    // ==========================================

    readonly menTshirts: Locator;
    readonly menJeans: Locator;

    // ==========================================
    // KIDS SUBCATEGORIES
    // ==========================================

    readonly kidsDress: Locator;
    readonly kidsTopsShirts: Locator;

    // ==========================================
    // CONSTRUCTOR
    // ==========================================

    constructor(page: Page) {
        this.page = page;

        // ==========================================
        // HOME PAGE
        // ==========================================

        this.signupLoginLink = page.getByRole(
            'link',
            {
                name: 'Signup / Login'
            }
        );

        // ==========================================
        // MAIN CATEGORIES
        // ==========================================

        this.womenCategory = page.locator(
            '#accordian a[href="#Women"]'
        );

        this.menCategory = page.locator(
            '#accordian a[href="#Men"]'
        );

        this.kidsCategory = page.locator(
            '#accordian a[href="#Kids"]'
        );

        // ==========================================
        // WOMEN SUBCATEGORIES
        // ==========================================

        this.womenDress = page.locator(
            '#Women a[href="/category_products/1"]'
        );

        this.womenTops = page.locator(
            '#Women a[href="/category_products/2"]'
        );

        this.womenSaree = page
            .locator('#Women')
            .getByText(
                'Saree',
                {
                    exact: true
                }
            );

        // ==========================================
        // MEN SUBCATEGORIES
        // ==========================================

        this.menTshirts = page.locator(
            '#Men a[href="/category_products/3"]'
        );

        this.menJeans = page.locator(
            '#Men a[href="/category_products/6"]'
        );

        // ==========================================
        // KIDS SUBCATEGORIES
        // ==========================================

        this.kidsDress = page.locator(
            '#Kids a[href="/category_products/4"]'
        );

        this.kidsTopsShirts = page
            .locator('#Kids')
            .getByText(
                'Tops & Shirts',
                {
                    exact: true
                }
            );
    }

    // ==========================================
    // OPEN HOME PAGE
    // ==========================================

    async open(): Promise<void> {

        console.log(
            'Opening Automation Exercise home page'
        );

        await this.page.goto(
            'https://automationexercise.com/',
            {
                waitUntil: 'domcontentloaded',
                timeout: 60000
            }
        );

        // Wait for the main category container.
        // This is more stable than immediately waiting
        // for an individual category link.

        await this.page.locator('#accordian').waitFor({
            state: 'attached',
            timeout: 30000
        });

        // Wait for the actual category links.

        await this.womenCategory.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await this.menCategory.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await this.kidsCategory.waitFor({
            state: 'visible',
            timeout: 15000
        });

        console.log(
            'Home page opened successfully'
        );
    }

    // ==========================================
    // SIGNUP / LOGIN
    // ==========================================

    async clickSignupLogin(): Promise<void> {

        await this.signupLoginLink.waitFor({
            state: 'visible',
            timeout: 20000
        });

        await this.signupLoginLink.click();

        console.log(
            'Signup / Login clicked'
        );
    }

    // ==========================================
    // WOMEN CATEGORY
    // ==========================================

    async clickWomenCategory(): Promise<void> {

        console.log(
            'Opening Women category'
        );

        await this.womenCategory
            .scrollIntoViewIfNeeded();

        // If already open, do not click again.

        if (
            await this.womenDress.isVisible()
        ) {

            console.log(
                'Women category is already open'
            );

        } else {

            // DOM click is more reliable across
            // Chromium, Firefox and WebKit.

            await this.womenCategory.evaluate(
                (element: HTMLElement) => {
                    element.click();
                }
            );

            // Wait for Dress to become visible.

            try {

                await this.womenDress.waitFor({
                    state: 'visible',
                    timeout: 5000
                });

            } catch {

                console.log(
                    'Women category did not open on first click - retrying'
                );

                await this.womenCategory.evaluate(
                    (element: HTMLElement) => {
                        element.click();
                    }
                );

                await this.womenDress.waitFor({
                    state: 'visible',
                    timeout: 10000
                });
            }
        }

        // Verify all Women subcategories.

        await this.womenTops.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await this.womenSaree.waitFor({
            state: 'visible',
            timeout: 10000
        });

        console.log(
            'Women category opened successfully'
        );
    }

    // ==========================================
    // MEN CATEGORY
    // ==========================================

    async clickMenCategory(): Promise<void> {

        console.log(
            'Opening Men category'
        );

        await this.menCategory
            .scrollIntoViewIfNeeded();

        // If already open, do not click again.

        if (
            await this.menTshirts.isVisible()
        ) {

            console.log(
                'Men category is already open'
            );

        } else {

            // DOM click is more reliable across
            // Chromium, Firefox and WebKit.

            await this.menCategory.evaluate(
                (element: HTMLElement) => {
                    element.click();
                }
            );

            // Wait for Tshirts to become visible.

            try {

                await this.menTshirts.waitFor({
                    state: 'visible',
                    timeout: 5000
                });

            } catch {

                console.log(
                    'Men category did not open on first click - retrying'
                );

                await this.menCategory.evaluate(
                    (element: HTMLElement) => {
                        element.click();
                    }
                );

                await this.menTshirts.waitFor({
                    state: 'visible',
                    timeout: 10000
                });
            }
        }

        // Verify all Men subcategories.

        await this.menJeans.waitFor({
            state: 'visible',
            timeout: 10000
        });

        console.log(
            'Men category opened successfully'
        );
    }

    // ==========================================
    // KIDS CATEGORY
    // ==========================================

    async clickKidsCategory(): Promise<void> {

        console.log(
            'Opening Kids category'
        );

        await this.kidsCategory
            .scrollIntoViewIfNeeded();

        // If already open, do not click again.

        if (
            await this.kidsDress.isVisible()
        ) {

            console.log(
                'Kids category is already open'
            );

        } else {

            // DOM click is more reliable across
            // Chromium, Firefox and WebKit.

            await this.kidsCategory.evaluate(
                (element: HTMLElement) => {
                    element.click();
                }
            );

            // Wait for Dress to become visible.

            try {

                await this.kidsDress.waitFor({
                    state: 'visible',
                    timeout: 5000
                });

            } catch {

                console.log(
                    'Kids category did not open on first click - retrying'
                );

                await this.kidsCategory.evaluate(
                    (element: HTMLElement) => {
                        element.click();
                    }
                );

                await this.kidsDress.waitFor({
                    state: 'visible',
                    timeout: 10000
                });
            }
        }

        // Verify all Kids subcategories.

        await this.kidsTopsShirts.waitFor({
            state: 'visible',
            timeout: 10000
        });

        console.log(
            'Kids category opened successfully'
        );
    }
}