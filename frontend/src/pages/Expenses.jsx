import { useState, useEffect, useCallback } from 'react';
import { Plus } from 'lucide-react';
import { expenseService } from '../services/expenseService';
import ExpenseList from '../components/ExpenseList';
import ExpenseFilters from '../components/ExpenseFilters';
import ExpenseForm from '../components/ExpenseForm';
import ConfirmModal from '../components/ConfirmModal';
import LoadingSpinner from '../components/LoadingSpinner';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        page: 0,
        size: 10,
        sortBy: 'date',
        direction: 'desc'
    });
    const [totalPages, setTotalPages] = useState(0);

    // Modal states
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingExpense, setEditingExpense] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [expenseToDelete, setExpenseToDelete] = useState(null);
    const [actionLoading, setActionLoading] = useState(false);

    const fetchExpenses = useCallback(async () => {
        try {
            setLoading(true);
            const data = await expenseService.getExpenses(filters);
            setExpenses(data.content);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Failed to fetch expenses', error);
        } finally {
            setLoading(false);
        }
    }, [filters]);

    useEffect(() => {
        fetchExpenses();
    }, [fetchExpenses]);

    const handleFilterChange = (newFilters) => {
        setFilters(prev => ({ ...prev, ...newFilters, page: 0 }));
    };

    const handlePageChange = (newPage) => {
        setFilters(prev => ({ ...prev, page: newPage }));
    };

    const handleCreate = () => {
        setEditingExpense(null);
        setIsFormOpen(true);
    };

    const handleEdit = (expense) => {
        setEditingExpense(expense);
        setIsFormOpen(true);
    };

    const handleDeleteClick = (expense) => {
        setExpenseToDelete(expense);
        setIsDeleteModalOpen(true);
    };

    const handleSubmit = async (data) => {
        try {
            setActionLoading(true);
            if (editingExpense) {
                await expenseService.updateExpense(editingExpense.id, data);
            } else {
                await expenseService.createExpense(data);
            }
            setIsFormOpen(false);
            fetchExpenses();
        } catch (error) {
            console.error('Failed to save expense', error);
        } finally {
            setActionLoading(false);
        }
    };

    const confirmDelete = async () => {
        try {
            setActionLoading(true);
            await expenseService.deleteExpense(expenseToDelete.id);
            setIsDeleteModalOpen(false);
            setExpenseToDelete(null);
            fetchExpenses();
        } catch (error) {
            console.error('Failed to delete expense', error);
        } finally {
            setActionLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Expenses</h1>
                    <p className="text-gray-500">Manage your daily transactions</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                    <Plus className="h-5 w-5" />
                    Add Expense
                </button>
            </div>

            <ExpenseFilters filters={filters} onFilterChange={handleFilterChange} />

            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <ExpenseList
                        expenses={expenses}
                        onEdit={handleEdit}
                        onDelete={handleDeleteClick}
                    />

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-6 gap-2">
                            <button
                                disabled={filters.page === 0}
                                onClick={() => handlePageChange(filters.page - 1)}
                                className="px-3 py-1 border rounded disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <span className="px-3 py-1 text-gray-600">
                                Page {filters.page + 1} of {totalPages}
                            </span>
                            <button
                                disabled={filters.page >= totalPages - 1}
                                onClick={() => handlePageChange(filters.page + 1)}
                                className="px-3 py-1 border rounded disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}

            {/* Modals */}
            <ExpenseForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSubmit={handleSubmit}
                initialData={editingExpense}
                isLoading={actionLoading}
            />

            <ConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Expense"
                message="Are you sure you want to delete this expense? This action cannot be undone."
                isLoading={actionLoading}
            />
        </div>
    );
};

export default Expenses;
