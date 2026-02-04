import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, useAuth } from '../context/AuthContext';
import Login from './Login';
import userEvent from '@testing-library/user-event';

// Mock useAuth
vi.mock('../context/AuthContext', () => ({
    useAuth: vi.fn(),
    AuthProvider: ({ children }) => <div>{children}</div>
}));

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('Login Component', () => {
    const mockLogin = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        useAuth.mockReturnValue({
            login: mockLogin
        });
    });

    const renderLogin = () => {
        return render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
    };

    it('renders login form correctly', () => {
        renderLogin();
        expect(screen.getByText(/Sign in/i, { selector: 'h2' })).toBeInTheDocument();
        expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument();
    });

    it('shows validation errors for empty fields', async () => {
        const user = userEvent.setup();
        renderLogin();
        const submitButton = screen.getByRole('button', { name: /Sign in/i });

        await user.click(submitButton);

        expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Password is required/i)).toBeInTheDocument();
    });

    it('shows error for invalid email format', async () => {
        const user = userEvent.setup();
        renderLogin();
        const emailInput = screen.getByLabelText(/Email address/i);
        const submitButton = screen.getByRole('button', { name: /Sign in/i });

        await user.type(emailInput, 'invalid-email');
        await user.click(submitButton);

        expect(await screen.findByText(/Invalid email address/i)).toBeInTheDocument();
    });

    it('successfully logs in and navigates to home', async () => {
        const user = userEvent.setup();
        mockLogin.mockResolvedValueOnce({ id: 1, email: 'test@example.com' });
        renderLogin();

        const emailInput = screen.getByLabelText(/Email address/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /Sign in/i });

        await user.type(emailInput, 'test@example.com');
        await user.type(passwordInput, 'password123');
        await user.click(submitButton);

        await waitFor(() => {
            expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
            expect(mockNavigate).toHaveBeenCalledWith('/');
        });
    });

    it('shows server error message on login failure', async () => {
        const user = userEvent.setup();
        const errorMessage = 'Invalid email or password';
        mockLogin.mockRejectedValueOnce({
            response: {
                data: { message: errorMessage }
            }
        });

        renderLogin();

        const emailInput = screen.getByLabelText(/Email address/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /Sign in/i });

        await user.type(emailInput, 'wrong@example.com');
        await user.type(passwordInput, 'wrongpass');
        await user.click(submitButton);

        expect(await screen.findByText(errorMessage)).toBeInTheDocument();
    });

    it('disables submit button while loading', async () => {
        const user = userEvent.setup();
        // Create a promise that we can control
        let resolveLogin;
        const loginPromise = new Promise((resolve) => {
            resolveLogin = resolve;
        });
        mockLogin.mockReturnValue(loginPromise);

        renderLogin();

        const emailInput = screen.getByLabelText(/Email address/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /Sign in/i });

        await user.type(emailInput, 'test@example.com');
        await user.type(passwordInput, 'password123');

        // Trigger submit
        await user.click(submitButton);

        // Check if it's disabled
        await waitFor(() => {
            expect(submitButton).toBeDisabled();
        });

        // Cleanup: resolve the promise
        resolveLogin({ id: 1 });
    });
});
