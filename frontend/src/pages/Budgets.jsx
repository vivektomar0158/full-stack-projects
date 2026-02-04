import { useState, useEffect } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, subMonths } from 'date-fns';
import { budgetService } from '../services/budgetService';
import BudgetCard from '../components/BudgetCard';
import BudgetForm from '../components/BudgetForm';
import ConfirmModal from '../components/ConfirmModal';
import LoadingSpinner from '../components/LoadingSpinner';

const Budgets = () => {
    const [budgets, setBudgets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState(new Date());

    // Modal states
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingBudget, setEditingBudget] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [budgetToDelete, setBudgetToDelete] = useState(null);
    const [actionLoading, setActionLoading] = useState(false);

    useEffect(() => {
        fetchBudgets();
    }, [currentDate]);

    const fetchBudgets = async () => {
        try {
            setLoading(true);
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1;
            const data = await budgetService.getBudgets(year, month);
            setBudgets(data);
        } catch (error) {
            console.error('Failed to fetch budgets', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePrevMonth = () => {
        setCurrentDate(prev => subMonths(prev, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(prev => addMonths(prev, 1));
    };

    const handleCreate = () => {
        setEditingBudget(null);
        setIsFormOpen(true);
    };

    const handleEdit = (budget) => {
        setEditingBudget(budget);
        setIsFormOpen(true);
    };

    const handleDeleteClick = (budget) => {
        setBudgetToDelete(budget);
        setIsDeleteModalOpen(true);
    };

    const handleSubmit = async (data) => {
        try {
            setActionLoading(true);
            if (editingBudget) {
                await budgetService.updateBudget(editingBudget.id, data);
            } else {
                await budgetService.createBudget(data);
            }
            setIsFormOpen(false);
            fetchBudgets();
        } catch (error) {
            console.error('Failed to save budget', error);
        } finally {
            setActionLoading(false);
        }
    };

    const confirmDelete = async () => {
        try {
            setActionLoading(true);
            await budgetService.deleteBudget(budgetToDelete.id);
            setIsDeleteModalOpen(false);
            setBudgetToDelete(null);
            fetchBudgets();
        } catch (error) {
            console.error('Failed to delete budget', error);
        } finally {
            setActionLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Budgets</h1>
                    <p className="text-gray-500">Track your spending limits</p>
                </div>

                <div className="flex items-center gap-3 bg-white p-1 rounded-lg border border-gray-200 shadow-sm self-start">
                    <button
                        onClick={handlePrevMonth}
                        className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-600" />
                    </button>
                    <span className="text-sm font-medium text-gray-900 w-32 text-center">
                        {format(currentDate, 'MMMM yyyy')}
                    </span>
                    <button
                        onClick={handleNextMonth}
                        className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-600" />
                    </button>
                </div>

                <button
                    onClick={handleCreate}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm self-start"
                >
                    <Plus className="h-5 w-5" />
                    Set Budget
                </button>
            </div>

            {loading ? (
                <LoadingSpinner />
            ) : budgets.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                    <div className="mx-auto h-12 w-12 text-gray-300">
                        <span className="text-4xl">💰</span>
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No budgets set</h3>
                    <p className="mt-1 text-sm text-gray-500">Set a budget to track your spending for {format(currentDate, 'MMMM')}.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {budgets.map(budget => (
                        <BudgetCard
                            key={budget.id}
                            budget={budget}
                            onEdit={handleEdit}
                            onDelete={handleDeleteClick}
                        />
                    ))}
                </div>
            )}

            {/* Modals */}
            <BudgetForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSubmit={handleSubmit}
                initialData={editingBudget}
                isLoading={actionLoading}
            />

            <ConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Budget"
                message="Are you sure you want to delete this budget? This will not delete your expenses."
                isLoading={actionLoading}
            />
        </div>
    );
};

export default Budgets;
