import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    // Navigation
    readonly productsLink: Locator;
    readonly cartLink: Locator;

    // Product page
    readonly firstProductView: Locator;
    readonly addToCartButton: Locator;
    readonly viewCartButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly addedMessage: Locator;

    // Cart page
    readonly cartHeading: Locator;
    readonly cartTable: Locator;
    readonly cartRows: Locator;
    readonly productPrices: Locator;
    readonly productQuantities: Locator;
    readonly productTotals: Locator;
    readonly deleteButtons: Locator;

    constructor(page: Page) {
        this.page = page;

        // Navigation
        this.productsLink = page.getByRole('link', {
            name: 'Products',
            exact: true
        });

        this.cartLink = page.getByRole('link', {
            name: 'Cart',
            exact: true
        });

        // View Product
        this.firstProductView = page.getByText(
            'View Product',
            { exact: true }
        ).first();

        // Product detail page
        // IMPORTANT:
        // Add to cart is not reliably exposed as a button
        // with getByRole on Firefox.
        this.addToCartButton = page.locator(
            'button:has-text("Add to cart")'
        ).first();

        this.viewCartButton = page.getByText(
            'View Cart',
            { exact: true }
        );

        this.continueShoppingButton = page.getByRole('button', {
            name: 'Continue Shopping',
            exact: true
        });

        this.addedMessage = page.getByText(
            'Your product has been added to cart.',
            { exact: true }
        );

        // Cart page
        this.cartHeading = page.getByText(
            'Shopping Cart',
            { exact: true }
        );

        this.cartTable = page.locator(
            '#cart_info_table'
        );

        this.cartRows = page.locator(
            '#cart_info_table tbody tr'
        );

        this.productPrices = page.locator(
            '#cart_info_table tbody tr .cart_price p'
        );

        this.productQuantities = page.locator(
            '#cart_info_table tbody tr .cart_quantity button'
        );

        this.productTotals = page.locator(
            '#cart_info_table tbody tr .cart_total p'
        );

        this.deleteButtons = page.locator(
            '#cart_info_table tbody tr .cart_delete a'
        );
    }


    // =========================================================
    // Open Products Page
    // =========================================================
    async openProductsPage(): Promise<void> {

        await this.page.goto(
            'https://automationexercise.com/products',
            {
                waitUntil: 'domcontentloaded',
                timeout: 30000
            }
        );

        await expect(
            this.page.getByText(
                'All Products',
                { exact: true }
            )
        ).toBeVisible({
            timeout: 15000
        });
    }


    // =========================================================
    // Add First Product To Cart
    // =========================================================
    async addFirstProductToCart(): Promise<void> {

        await this.openProductsPage();

        const firstProduct =
            this.page.locator(
                '.features_items .product-image-wrapper'
            ).first();

        await expect(
            firstProduct
        ).toBeVisible({
            timeout: 15000
        });

        await firstProduct.hover();

        const addButton =
            firstProduct.getByText(
                'Add to cart',
                { exact: true }
            ).first();

        await expect(
            addButton
        ).toBeVisible({
            timeout: 10000
        });

        await addButton.click();

        await expect(
            this.addedMessage
        ).toBeVisible({
            timeout: 10000
        });

        if (
            await this.viewCartButton.isVisible()
        ) {

            await this.viewCartButton.click();

        } else {

            await this.cartLink.click();
        }

        await this.waitForCartPage();
    }


    // =========================================================
    // Open Cart With Product
    // =========================================================
    async openCartWithProduct(): Promise<void> {

        await this.addFirstProductToCart();
    }


    // =========================================================
    // CA005
    //
    // Home
    // -> View Product
    // -> Verify Product Detail
    // -> Quantity = 4
    // -> Add To Cart
    // -> View Cart
    // -> Verify Quantity
    // =========================================================
    async openCartUsingProductDetail(): Promise<void> {

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
            this.page.locator(
                '.features_items'
            ).first()
        ).toBeVisible({
            timeout: 15000
        });

        // Find View Product directly
        await expect(
            this.firstProductView
        ).toBeVisible({
            timeout: 15000
        });

        console.log(
            'View Product found'
        );

        await this.firstProductView.click();

        console.log(
            'Product detail opened'
        );

        // Verify product detail
        await expect(
            this.page.locator(
                '.product-information'
            )
        ).toBeVisible({
            timeout: 15000
        });

        console.log(
            'Product detail verified'
        );

        // Quantity
        const quantityInput =
            this.page.locator('#quantity');

        await expect(
            quantityInput
        ).toBeVisible({
            timeout: 10000
        });

        await quantityInput.fill('4');

        console.log(
            'Quantity set to 4'
        );

        // Add to Cart
        await expect(
            this.addToCartButton
        ).toBeVisible({
            timeout: 10000
        });

        console.log(
            'Add to Cart button found'
        );

        await this.addToCartButton.click();

        console.log(
            'Product added to cart'
        );

        // Verify added message
        await expect(
            this.addedMessage
        ).toBeVisible({
            timeout: 10000
        });

        console.log(
            'Product added message displayed'
        );

        // View Cart
        if (
            await this.viewCartButton.isVisible()
        ) {

            console.log(
                'Clicking View Cart'
            );

            await this.viewCartButton.click();

        } else {

            console.log(
                'View Cart popup not found'
            );

            console.log(
                'Using Cart link instead'
            );

            await this.cartLink.click();
        }

        await this.waitForCartPage();

        console.log(
            'Cart page opened'
        );
    }


    // =========================================================
    // Wait For Cart Page
    // =========================================================
    async waitForCartPage(): Promise<void> {

        await expect(
            this.cartHeading
        ).toBeVisible({
            timeout: 20000
        });

        await expect(
            this.cartTable
        ).toBeVisible({
            timeout: 20000
        });

        await expect(
            this.cartRows.first()
        ).toBeVisible({
            timeout: 20000
        });
    }


    // =========================================================
    // Remove First Product
    // =========================================================
    async removeFirstProduct(): Promise<void> {

        await expect(
            this.deleteButtons.first()
        ).toBeVisible({
            timeout: 10000
        });

        await this.deleteButtons.first().click();

        await expect(
            this.cartRows
        ).toHaveCount(
            0,
            {
                timeout: 15000
            }
        );
    }
}