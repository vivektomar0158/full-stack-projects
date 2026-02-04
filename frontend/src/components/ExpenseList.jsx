import { Edit2, Trash2, Calendar, Tag } from 'lucide-react';
import { format } from 'date-fns';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
    if (expenses.length === 0) {
        return (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                <div className="mx-auto h-12 w-12 text-gray-300">
                    <Tag className="h-full w-full" />
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No expenses found</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating a new expense.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {expenses.map((expense) => (
                            <tr key={expense.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                        {format(new Date(expense.date), 'MMM d, yyyy')}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                                    {expense.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                        style={{ backgroundColor: `${expense.categoryColor}20`, color: expense.categoryColor }}
                                    >
                                        {expense.categoryName}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                    ${expense.amount.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => onEdit(expense)}
                                            title="Edit"
                                            aria-label="Edit expense"
                                            className="text-blue-600 hover:text-blue-900 p-1 hover:bg-blue-50 rounded-md transition-colors"
                                        >
                                            <Edit2 className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => onDelete(expense)}
                                            title="Delete"
                                            aria-label="Delete expense"
                                            className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded-md transition-colors"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExpenseList;
