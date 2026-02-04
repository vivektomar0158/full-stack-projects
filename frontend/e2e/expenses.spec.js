import { test, expect } from '@playwright/test';

test.describe('Expense Management', () => {
    test.beforeEach(async ({ page }) => {
        const timestamp = Date.now() + Math.random().toString(36).substring(7);
        const testUser = {
            name: 'Expense User',
            email: `expense_${timestamp}@example.com`,
            password: 'password123'
        };

        // Register and login
        await page.goto('/register');
        await page.fill('#name', testUser.name);
        await page.fill('#email', testUser.email);
        await page.fill('#password', testUser.password);
        await Promise.all([
            page.waitForURL('/'),
            page.click('button[type="submit"]')
        ]);

        // Wait for dashboard to load
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

    test('should add a new expense successfully', async ({ page }) => {
        // Navigate to Expenses page
        await page.click('nav >> text=Expenses');
        await expect(page).toHaveURL('/expenses');

        // Open form
        await page.click('button:has-text("Add Expense")');

        // Fill form
        await page.fill('#description', 'Lunch with team');
        await page.fill('#amount', '45.50');
        await page.selectOption('#category', { label: 'Food' });
        await page.selectOption('#paymentMethod', 'UPI');

        await Promise.all([
            page.waitForResponse(resp => resp.url().includes('/api/expenses') && resp.status() === 201),
            page.click('button[type="submit"]')
        ]);

        // Check if visible in list
        await expect(page.locator('text=Lunch with team')).toBeVisible();
        await expect(page.locator('text=$45.50').first()).toBeVisible();
    });

    test('should add and then edit an expense', async ({ page }) => {
        await page.goto('/expenses');
        await page.click('button:has-text("Add Expense")');
        await page.fill('#description', 'Temporary Expense');
        await page.fill('#amount', '10.00');
        await page.selectOption('#category', { label: 'Other' });
        await page.click('button[type="submit"]');

        await expect(page.locator('text=Temporary Expense')).toBeVisible();

        // Edit
        await page.click('tr:has-text("Temporary Expense") >> button[title="Edit"]');
        await page.fill('#description', 'Updated Expense');
        await page.fill('#amount', '15.00');
        await page.click('button:has-text("Save Changes")');

        await expect(page.locator('text=Updated Expense')).toBeVisible();
        await expect(page.locator('text=$15.00').first()).toBeVisible();
    });

    test('should delete an expense', async ({ page }) => {
        await page.goto('/expenses');
        await page.click('button:has-text("Add Expense")');
        await page.fill('#description', 'Expense to Delete');
        await page.fill('#amount', '5.00');
        await page.selectOption('#category', { label: 'Other' });
        await page.click('button[type="submit"]');

        await expect(page.locator('text=Expense to Delete')).toBeVisible();

        // Delete
        await page.click('tr:has-text("Expense to Delete") >> button[title="Delete"]');

        // Confirm in Modal
        await expect(page.getByRole('heading', { name: 'Delete Expense' })).toBeVisible();
        await page.click('button:has-text("Confirm Delete")');

        await expect(page.locator('text=Expense to Delete')).not.toBeVisible();
    });
});
