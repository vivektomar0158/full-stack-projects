import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AlertCircle, Loader2 } from 'lucide-react';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useAuth();
    const navigate = useNavigate();
    const [serverError, setServerError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        setServerError('');
        try {
            await login(data.email, data.password);
            navigate('/');
        } catch (err) {
            setServerError(err.response?.data?.message || 'Invalid email or password');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Sign in</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Welcome back to Expense Tracker
                    </p>
                </div>

                {serverError && (
                    <div className="bg-red-50 text-red-700 p-3 rounded-lg flex items-center gap-2 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {serverError}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <input
                                id="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                type="email"
                                className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                {...register('password', { required: 'Password is required' })}
                                type="password"
                                className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Sign in'}
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
