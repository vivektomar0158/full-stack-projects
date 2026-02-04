import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
    const timestamp = Date.now();
    const testUser = {
        name: 'E2E User',
        email: `e2e_${timestamp}@example.com`,
        password: 'password123'
    };

    test('should register a new user successfully', async ({ page }) => {
        page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

        await page.goto('/register');

        await page.fill('#name', testUser.name);
        await page.fill('#email', testUser.email);
        await page.fill('#password', testUser.password);

        await Promise.all([
            page.waitForURL('/'),
            page.click('button[type="submit"]')
        ]);

        // Should navigate to dashboard - use a more specific selector
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        await expect(page.locator('text=Total Spent (Month)')).toBeVisible();
    });

    test('should login successfully with created user', async ({ page }) => {
        page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

        await page.goto('/login');

        await page.fill('#email', testUser.email);
        await page.fill('#password', testUser.password);

        await Promise.all([
            page.waitForURL('/'),
            page.click('button[type="submit"]')
        ]);

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        await expect(page.locator('text=Total Spent (Month)')).toBeVisible();
    });

    test('should show error for invalid credentials', async ({ page }) => {
        await page.goto('/login');

        await page.fill('#email', 'nonexistent@example.com');
        await page.fill('#password', 'wrongpassword');

        await page.click('button[type="submit"]');

        await expect(page.locator('text=Invalid email or password')).toBeVisible();
    });
});
