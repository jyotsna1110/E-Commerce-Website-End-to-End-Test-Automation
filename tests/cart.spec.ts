import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/cart.page';

test.describe('Automation Exercise - Cart Page Tests', () => {

    // ---------------------------------------------------------
    // CA001 - Verify Cart page is displayed
    // ---------------------------------------------------------
    test('CA001 - Verify Cart page is displayed', async ({ page }) => {

        console.log('Running CA001');

        const cartPage = new CartPage(page);

        await cartPage.openCartWithProduct();

        await expect(
            cartPage.cartHeading
        ).toBeVisible();

        console.log(
            'CA001 passed - Cart page is displayed'
        );
    });


    // ---------------------------------------------------------
    // CA002 - Verify Cart table is displayed
    // ---------------------------------------------------------
    test('CA002 - Verify Cart table is displayed', async ({ page }) => {

        console.log('Running CA002');

        const cartPage = new CartPage(page);

        await cartPage.openCartWithProduct();

        await expect(
            cartPage.cartTable
        ).toBeVisible();

        console.log(
            'CA002 passed - Cart table is displayed'
        );
    });


    // ---------------------------------------------------------
    // CA003 - Verify products are displayed in Cart
    // ---------------------------------------------------------
    test('CA003 - Verify products are displayed in Cart', async ({ page }) => {

        console.log('Running CA003');

        const cartPage = new CartPage(page);

        await cartPage.openCartWithProduct();

        const productCount =
            await cartPage.cartRows.count();

        console.log(
            `Products in cart: ${productCount}`
        );

        expect(productCount).toBeGreaterThan(0);

        console.log(
            'CA003 passed - Products are displayed in Cart'
        );
    });


    // ---------------------------------------------------------
    // CA004 - Verify product price in Cart
    // ---------------------------------------------------------
    test('CA004 - Verify product price in Cart', async ({ page }) => {

        console.log('Running CA004');

        const cartPage = new CartPage(page);

        await cartPage.openCartWithProduct();

        const priceCount =
            await cartPage.productPrices.count();

        console.log(
            `Price elements found: ${priceCount}`
        );

        expect(priceCount).toBeGreaterThan(0);

        const price =
            await cartPage.productPrices.first().textContent();

        console.log(
            `Product price: ${price}`
        );

        expect(price?.trim()).not.toBe('');

        console.log(
            'CA004 passed - Product price is displayed'
        );
    });


    // ---------------------------------------------------------
    // CA005 - Verify product quantity in Cart
    //
    // Flow:
    // Home
    // -> View Product
    // -> Set quantity to 4
    // -> Add to Cart
    // -> View Cart
    // -> Verify quantity = 4
    // ---------------------------------------------------------
    test('CA005 - Verify product quantity in Cart', async ({ page }) => {

        console.log('Running CA005');

        const cartPage = new CartPage(page);

        await cartPage.openCartUsingProductDetail();

        const quantityCount =
            await cartPage.productQuantities.count();

        console.log(
            `Quantity elements found: ${quantityCount}`
        );

        expect(quantityCount).toBeGreaterThan(0);

        const quantity =
            await cartPage.productQuantities.first().textContent();

        console.log(
            `Product quantity: ${quantity}`
        );

        expect(quantity?.trim()).toBe('4');

        console.log(
            'CA005 passed - Product quantity is displayed correctly'
        );
    });


    // ---------------------------------------------------------
    // CA006 - Verify product total in Cart
    // ---------------------------------------------------------
    test('CA006 - Verify product total in Cart', async ({ page }) => {

        console.log('Running CA006');

        const cartPage = new CartPage(page);

        await cartPage.openCartWithProduct();

        const totalCount =
            await cartPage.productTotals.count();

        console.log(
            `Total elements found: ${totalCount}`
        );

        expect(totalCount).toBeGreaterThan(0);

        const total =
            await cartPage.productTotals.first().textContent();

        console.log(
            `Product total: ${total}`
        );

        expect(total?.trim()).not.toBe('');

        console.log(
            'CA006 passed - Product total is displayed'
        );
    });


    // ---------------------------------------------------------
    // CA007 - Verify product can be removed from Cart
    // ---------------------------------------------------------
    test('CA007 - Verify product can be removed from Cart', async ({ page }) => {

        console.log('Running CA007');

        const cartPage = new CartPage(page);

        await cartPage.openCartWithProduct();

        const beforeRemove =
            await cartPage.cartRows.count();

        console.log(
            `Products before remove: ${beforeRemove}`
        );

        expect(beforeRemove).toBeGreaterThan(0);

        await cartPage.removeFirstProduct();

        const afterRemove =
            await cartPage.cartRows.count();

        console.log(
            `Products after remove: ${afterRemove}`
        );

        expect(afterRemove).toBe(0);

        console.log(
            'CA007 passed - Product is removed from Cart'
        );
    });

});