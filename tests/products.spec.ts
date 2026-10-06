import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/products.page';

test.describe(
    'Automation Exercise - Products Page Tests',
    () => {

        // ==========================================
        // PR001
        // ==========================================

        test(
            'PR001 - Verify Products page is displayed',
            async ({ page }) => {

                console.log('Running PR001');

                const productsPage =
                    new ProductsPage(page);

                await productsPage.open();

                await expect(
                    productsPage.productsTitle
                ).toBeVisible();

                console.log(
                    'PR001 passed - Products page is displayed'
                );
            }
        );

        // ==========================================
        // PR002
        // ==========================================

        test(
            'PR002 - Verify Women category and subcategories',
            async ({ page }) => {

                console.log('Running PR002');

                const productsPage =
                    new ProductsPage(page);

                await productsPage.open();

                await expect(
                    productsPage.womenCategory
                ).toBeVisible();

                await productsPage.openWomenCategory();

                await expect(
                    productsPage.womenDress
                ).toBeVisible();

                await expect(
                    productsPage.womenTops
                ).toBeVisible();

                await expect(
                    productsPage.womenSaree
                ).toBeVisible();

                console.log(
                    'PR002 passed - Women category and subcategories are visible'
                );
            }
        );

        // ==========================================
        // PR003
        // ==========================================

        test(
            'PR003 - Verify Men category and subcategories',
            async ({ page }) => {

                console.log('Running PR003');

                const productsPage =
                    new ProductsPage(page);

                await productsPage.open();

                await expect(
                    productsPage.menCategory
                ).toBeVisible();

                await productsPage.openMenCategory();

                await expect(
                    productsPage.menTshirts
                ).toBeVisible();

                await expect(
                    productsPage.menJeans
                ).toBeVisible();

                console.log(
                    'PR003 passed - Men category and subcategories are visible'
                );
            }
        );

        // ==========================================
        // PR004
        // ==========================================

        test(
            'PR004 - Verify Kids category and subcategories',
            async ({ page }) => {

                console.log('Running PR004');

                const productsPage =
                    new ProductsPage(page);

                await productsPage.open();

                await expect(
                    productsPage.kidsCategory
                ).toBeVisible();

                await productsPage.openKidsCategory();

                await expect(
                    productsPage.kidsDress
                ).toBeVisible();

                await expect(
                    productsPage.kidsTopsShirts
                ).toBeVisible();

                console.log(
                    'PR004 passed - Kids category and subcategories are visible'
                );
            }
        );

        // ==========================================
        // PR005
        // ==========================================

        test(
            'PR005 - Verify Brands are displayed',
            async ({ page }) => {

                console.log('Running PR005');

                const productsPage =
                    new ProductsPage(page);

                await productsPage.open();

                await expect(
                    productsPage.poloBrand
                ).toBeVisible();

                await expect(
                    productsPage.hmBrand
                ).toBeVisible();

                await expect(
                    productsPage.madameBrand
                ).toBeVisible();

                console.log(
                    'PR005 passed - Brands are displayed'
                );
            }
        );

        // ==========================================
        // PR006
        // ==========================================

        test(
            'PR006 - Verify products are displayed',
            async ({ page }) => {

                console.log('Running PR006');

                const productsPage =
                    new ProductsPage(page);

                await productsPage.open();

                const products =
                    page.locator('.features_items .product-image-wrapper');

                await expect(products.first()).toBeVisible();

                const productCount =
                    await products.count();

                expect(productCount).toBeGreaterThan(0);

                console.log(
                    'PR006 passed - Products are displayed'
                );
            }
        );

        // ==========================================
        // PR007
        // ==========================================

        test(
            'PR007 - Search for a product',
            async ({ page }) => {

                console.log('Running PR007');

                const productsPage =
                    new ProductsPage(page);

                await productsPage.open();

                await productsPage.searchProduct(
                    'Blue Top'
                );

                await expect(
                    productsPage.searchedProductsTitle
                ).toBeVisible();

                const searchedProduct =
                    page.locator(
                        '.features_items .product-image-wrapper'
                    );

                await expect(
                    searchedProduct.first()
                ).toBeVisible();

                console.log(
                    'PR007 passed - Product search is working'
                );
            }
        );

    }
);