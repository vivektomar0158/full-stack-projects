import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { X, Loader2 } from 'lucide-react';
import { categoryService } from '../services/categoryService';

const ExpenseForm = ({ isOpen, onClose, onSubmit, initialData, isLoading }) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (isOpen) {
            if (initialData) {
                reset({
                    description: initialData.description,
                    amount: initialData.amount,
                    date: initialData.date,
                    categoryId: initialData.categoryId,
                    paymentMethod: initialData.paymentMethod
                });
            } else {
                reset({
                    date: new Date().toISOString().split('T')[0],
                    paymentMethod: 'CASH'
                });
            }
            loadCategories();
        }
    }, [isOpen, initialData, reset]);

    const loadCategories = async () => {
        try {
            const data = await categoryService.getCategories();
            setCategories(data);
        } catch (error) {
            console.error('Failed to load categories', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900">
                        {initialData ? 'Edit Expense' : 'New Expense'}
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4" noValidate>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input
                            id="description"
                            {...register('description', { required: 'Description is required' })}
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g. Grocery shopping"
                        />
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                            <div className="relative">
                                <span className="absolute left-3 top-2 text-gray-500">$</span>
                                <input
                                    id="amount"
                                    {...register('amount', {
                                        required: 'Amount is required',
                                        min: { value: 0.01, message: 'Amount must be positive' }
                                    })}
                                    type="number"
                                    step="0.01"
                                    className="w-full pl-7 px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="0.00"
                                />
                            </div>
                            {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                            <input
                                id="date"
                                {...register('date', { required: 'Date is required' })}
                                type="date"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <select
                                id="category"
                                {...register('categoryId', { required: 'Category is required' })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select Category</option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                            {errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                            <select
                                id="paymentMethod"
                                {...register('paymentMethod', { required: 'Payment method is required' })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="CASH">Cash</option>
                                <option value="CARD">Card</option>
                                <option value="UPI">UPI</option>
                                <option value="NET_BANKING">Net Banking</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isLoading}
                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50"
                        >
                            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                            {initialData ? 'Save Changes' : 'Add Expense'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExpenseForm;
