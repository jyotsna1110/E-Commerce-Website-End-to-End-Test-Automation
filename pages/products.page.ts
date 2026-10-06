import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;

    // ==========================================
    // PRODUCTS PAGE
    // ==========================================

    readonly productsTitle: Locator;

    // ==========================================
    // CATEGORY HEADERS
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
    // BRANDS
    // ==========================================

    readonly poloBrand: Locator;
    readonly hmBrand: Locator;
    readonly madameBrand: Locator;

    // ==========================================
    // SEARCH
    // ==========================================

    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly searchedProductsTitle: Locator;

    // ==========================================
    // CONSTRUCTOR
    // ==========================================

    constructor(page: Page) {
        this.page = page;

        // ==========================================
        // PRODUCTS PAGE
        // ==========================================

        this.productsTitle = page.getByText(
            'All Products',
            {
                exact: true
            }
        );

        // ==========================================
        // CATEGORY HEADERS
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

        this.kidsTopsShirts = page.locator(
            '#Kids a[href="/category_products/5"]'
        );

        // ==========================================
        // BRANDS
        // ==========================================

        this.poloBrand = page.getByRole(
            'link',
            {
                name: /Polo/
            }
        ).first();

        this.hmBrand = page.getByRole(
            'link',
            {
                name: /H&M/
            }
        ).first();

        this.madameBrand = page.getByRole(
            'link',
            {
                name: /Madame/
            }
        ).first();

        // ==========================================
        // SEARCH
        // ==========================================

        this.searchInput = page.locator(
            '#search_product'
        );

        this.searchButton = page.locator(
            '#submit_search'
        );

        this.searchedProductsTitle = page.getByText(
            'Searched Products',
            {
                exact: true
            }
        );
    }

    // ==========================================
    // OPEN PRODUCTS PAGE
    // ==========================================

    async open(): Promise<void> {

        console.log(
            'Opening Products page'
        );

        await this.page.goto(
            'https://automationexercise.com/products',
            {
                waitUntil: 'domcontentloaded',
                timeout: 60000
            }
        );

        await this.productsTitle.waitFor({
            state: 'visible',
            timeout: 30000
        });

        console.log(
            'Products page opened successfully'
        );
    }

    // ==========================================
    // OPEN WOMEN CATEGORY
    // ==========================================

    async openWomenCategory(): Promise<void> {

        if (
            !(await this.womenDress.isVisible())
        ) {

            await this.womenCategory
                .scrollIntoViewIfNeeded();

            await this.womenCategory.evaluate(
                (element: HTMLElement) => {
                    element.click();
                }
            );
        }

        await this.womenDress.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await this.womenTops.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await this.womenSaree.waitFor({
            state: 'visible',
            timeout: 10000
        });
    }

    // ==========================================
    // OPEN MEN CATEGORY
    // ==========================================

    async openMenCategory(): Promise<void> {

        if (
            !(await this.menTshirts.isVisible())
        ) {

            await this.menCategory
                .scrollIntoViewIfNeeded();

            await this.menCategory.evaluate(
                (element: HTMLElement) => {
                    element.click();
                }
            );
        }

        await this.menTshirts.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await this.menJeans.waitFor({
            state: 'visible',
            timeout: 10000
        });
    }

    // ==========================================
    // OPEN KIDS CATEGORY
    // ==========================================

    async openKidsCategory(): Promise<void> {

        if (
            !(await this.kidsDress.isVisible())
        ) {

            await this.kidsCategory
                .scrollIntoViewIfNeeded();

            await this.kidsCategory.evaluate(
                (element: HTMLElement) => {
                    element.click();
                }
            );
        }

        await this.kidsDress.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await this.kidsTopsShirts.waitFor({
            state: 'visible',
            timeout: 10000
        });
    }

    // ==========================================
    // SEARCH PRODUCT
    // ==========================================

    async searchProduct(
        productName: string
    ): Promise<void> {

        await this.searchInput.fill(
            productName
        );

        await this.searchButton.click();

        await this.searchedProductsTitle.waitFor({
            state: 'visible',
            timeout: 10000
        });

        console.log(
            `Product search completed: ${productName}`
        );
    }
}