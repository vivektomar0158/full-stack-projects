import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { X, Loader2 } from 'lucide-react';
import { categoryService } from '../services/categoryService';

const BudgetForm = ({ isOpen, onClose, onSubmit, initialData, isLoading }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (isOpen) {
            if (initialData) {
                reset({
                    categoryId: initialData.categoryId,
                    monthlyLimit: initialData.monthlyLimit,
                    month: initialData.month,
                    year: initialData.year
                });
            } else {
                const today = new Date();
                reset({
                    monthlyLimit: '',
                    month: today.getMonth() + 1,
                    year: today.getFullYear()
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
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900">
                        {initialData ? 'Edit Budget' : 'Set New Budget'}
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4" noValidate>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                            id="category"
                            {...register('categoryId', { required: 'Category is required' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            disabled={!!initialData} // Usually can't change category of existing budget easily due to unique constraint logic handled in UI
                        >
                            <option value="">Select Category</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        {errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="monthlyLimit" className="block text-sm font-medium text-gray-700 mb-1">Monthly Limit</label>
                        <div className="relative">
                            <span className="absolute left-3 top-2 text-gray-500">$</span>
                            <input
                                id="monthlyLimit"
                                {...register('monthlyLimit', {
                                    required: 'Limit is required',
                                    min: { value: 0.01, message: 'Limit must be positive' }
                                })}
                                type="number"
                                step="0.01"
                                className="w-full pl-7 px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="0.00"
                            />
                        </div>
                        {errors.monthlyLimit && <p className="text-red-500 text-xs mt-1">{errors.monthlyLimit.message}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">Month</label>
                            <select
                                id="month"
                                {...register('month', { required: true })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                disabled={!!initialData}
                            >
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                            <input
                                id="year"
                                {...register('year', { required: true, min: 2024 })}
                                type="number"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                disabled={!!initialData}
                            />
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
                            {initialData ? 'Save Changes' : 'Set Budget'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BudgetForm;
