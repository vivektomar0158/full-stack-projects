import { test, expect } from '@playwright/test';

test.describe('Budget Management', () => {
    test.beforeEach(async ({ page }) => {
        const timestamp = Date.now() + Math.random().toString(36).substring(7);
        const testUser = {
            name: 'Budget User',
            email: `budget_${timestamp}@example.com`,
            password: 'password123'
        };

        await page.goto('/register');
        await page.fill('#name', testUser.name);
        await page.fill('#email', testUser.email);
        await page.fill('#password', testUser.password);
        await Promise.all([
            page.waitForURL('/'),
            page.click('button[type="submit"]')
        ]);
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

    test('should set and update a budget', async ({ page }) => {
        await page.click('nav >> text=Budgets');
        await expect(page).toHaveURL('/budgets');

        await page.click('button:has-text("Set Budget")');

        await page.selectOption('#category', { label: 'Food' });
        await page.fill('#monthlyLimit', '500');

        await Promise.all([
            page.waitForResponse(resp => resp.url().includes('/api/budgets') && resp.status() === 201),
            page.click('button[type="submit"]')
        ]);

        await expect(page.locator('text=Food')).toBeVisible();
        await expect(page.getByText('$500.00', { exact: true })).toBeVisible();

        // Update budget - use card-based selector
        const card = page.locator('div.bg-white', { hasText: 'Food' });
        await card.locator('button[title="Edit"]').click();

        await page.fill('#monthlyLimit', '600');
        await page.click('button:has-text("Save Changes")');

        await expect(page.getByText('$600.00', { exact: true })).toBeVisible();
    });
});
