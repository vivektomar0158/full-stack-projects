import { render, screen, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Register from './Register';
import userEvent from '@testing-library/user-event';

// Mock useAuth
vi.mock('../context/AuthContext', () => ({
    useAuth: vi.fn(),
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

describe('Register Component', () => {
    const mockRegisterUser = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        useAuth.mockReturnValue({
            register: mockRegisterUser
        });
    });

    const renderRegister = () => {
        return render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );
    };

    it('renders register form correctly', () => {
        renderRegister();
        expect(screen.getByText(/Create Account/i, { selector: 'h2' })).toBeInTheDocument();
        expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Create Account/i })).toBeInTheDocument();
    });

    it('shows validation errors for empty fields', async () => {
        const user = userEvent.setup();
        renderRegister();
        const submitButton = screen.getByRole('button', { name: /Create Account/i });

        await user.click(submitButton);

        expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Password is required/i)).toBeInTheDocument();
    });

    it('shows error for name too short', async () => {
        const user = userEvent.setup();
        renderRegister();
        const nameInput = screen.getByLabelText(/Full Name/i);
        const submitButton = screen.getByRole('button', { name: /Create Account/i });

        await user.type(nameInput, 'A');
        await user.click(submitButton);

        expect(await screen.findByText(/Name must be at least 2 characters/i)).toBeInTheDocument();
    });

    it('shows error for password too short', async () => {
        const user = userEvent.setup();
        renderRegister();
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /Create Account/i });

        await user.type(passwordInput, '12345');
        await user.click(submitButton);

        expect(await screen.findByText(/Password must be at least 6 characters/i)).toBeInTheDocument();
    });

    it('successfully registers and navigates to home', async () => {
        const user = userEvent.setup();
        mockRegisterUser.mockResolvedValueOnce({ id: 1, email: 'test@example.com' });
        renderRegister();

        const nameInput = screen.getByLabelText(/Full Name/i);
        const emailInput = screen.getByLabelText(/Email address/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /Create Account/i });

        await user.type(nameInput, 'Test User');
        await user.type(emailInput, 'test@example.com');
        await user.type(passwordInput, 'password123');
        await user.click(submitButton);

        await waitFor(() => {
            expect(mockRegisterUser).toHaveBeenCalledWith('Test User', 'test@example.com', 'password123');
            expect(mockNavigate).toHaveBeenCalledWith('/');
        });
    });

    it('shows server error message on registration failure', async () => {
        const user = userEvent.setup();
        const errorMessage = 'Email already in use';
        mockRegisterUser.mockRejectedValueOnce({
            response: {
                data: { message: errorMessage }
            }
        });

        renderRegister();

        const nameInput = screen.getByLabelText(/Full Name/i);
        const emailInput = screen.getByLabelText(/Email address/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /Create Account/i });

        await user.type(nameInput, 'Test User');
        await user.type(emailInput, 'existing@example.com');
        await user.type(passwordInput, 'password123');
        await user.click(submitButton);

        expect(await screen.findByText(errorMessage)).toBeInTheDocument();
    });

    it('disables submit button while loading', async () => {
        const user = userEvent.setup();
        let resolveRegister;
        const registerPromise = new Promise((resolve) => {
            resolveRegister = resolve;
        });
        mockRegisterUser.mockReturnValue(registerPromise);

        renderRegister();

        const nameInput = screen.getByLabelText(/Full Name/i);
        const emailInput = screen.getByLabelText(/Email address/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /Create Account/i });

        await user.type(nameInput, 'Test User');
        await user.type(emailInput, 'test@example.com');
        await user.type(passwordInput, 'password123');

        await user.click(submitButton);

        await waitFor(() => {
            expect(submitButton).toBeDisabled();
        });

        resolveRegister({ id: 1 });
    });
});
