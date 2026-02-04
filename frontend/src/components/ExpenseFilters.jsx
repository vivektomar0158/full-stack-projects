import { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { categoryService } from '../services/categoryService';

const ExpenseFilters = ({ filters, onFilterChange }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
            const data = await categoryService.getCategories();
            setCategories(data);
        } catch (error) {
            console.error('Failed to load categories', error);
        }
    };

    const handleChange = (key, value) => {
        onFilterChange({ ...filters, [key]: value });
    };

    const clearFilters = () => {
        onFilterChange({
            categoryId: '',
            startDate: '',
            endDate: '',
            search: ''
        });
    };

    const hasActiveFilters = filters.categoryId || filters.startDate || filters.endDate || filters.search;

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Search</label>
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search description..."
                            className="w-full pl-9 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            value={filters.search || ''}
                            onChange={(e) => handleChange('search', e.target.value)}
                        />
                    </div>
                </div>

                {/* Category */}
                <div className="w-full md:w-48">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Category</label>
                    <select
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={filters.categoryId || ''}
                        onChange={(e) => handleChange('categoryId', e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>

                {/* Date Range */}
                <div className="w-full md:w-40">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Start Date</label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={filters.startDate || ''}
                        onChange={(e) => handleChange('startDate', e.target.value)}
                    />
                </div>

                <div className="w-full md:w-40">
                    <label className="block text-xs font-medium text-gray-500 mb-1">End Date</label>
                    <input
                        type="date"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={filters.endDate || ''}
                        onChange={(e) => handleChange('endDate', e.target.value)}
                    />
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                    <div className="flex items-end">
                        <button
                            onClick={clearFilters}
                            className="px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1"
                        >
                            <X className="h-4 w-4" />
                            Clear
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExpenseFilters;
