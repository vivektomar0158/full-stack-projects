import { Edit2, Trash2, AlertTriangle } from 'lucide-react';

const BudgetCard = ({ budget, onEdit, onDelete }) => {
    const {
        categoryName,
        categoryColor,
        categoryIcon,
        monthlyLimit,
        totalSpent,
        remainingAmount,
        percentageUsed
    } = budget;

    // Determine color status
    let statusColor = 'bg-green-500';
    let textColor = 'text-green-600';
    let bgColor = 'bg-green-50';

    if (percentageUsed >= 100) {
        statusColor = 'bg-red-500';
        textColor = 'text-red-600';
        bgColor = 'bg-red-50';
    } else if (percentageUsed >= 80) {
        statusColor = 'bg-yellow-500';
        textColor = 'text-yellow-600';
        bgColor = 'bg-yellow-50';
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                        style={{ backgroundColor: `${categoryColor}20` }}
                    >
                        {categoryIcon || '💰'}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">{categoryName}</h3>
                        <p className="text-xs text-gray-500">Monthly Limit: ${monthlyLimit.toFixed(2)}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(budget)}
                        title="Edit"
                        aria-label="Edit budget"
                        className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                        <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                        onClick={() => onDelete(budget)}
                        title="Delete"
                        aria-label="Delete budget"
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Spent: <span className="font-semibold text-gray-900">${totalSpent.toFixed(2)}</span></span>
                    <span className={textColor}>
                        {remainingAmount < 0 ? 'Over budget: ' : 'Left: '}
                        <span className="font-bold">${Math.abs(remainingAmount).toFixed(2)}</span>
                    </span>
                </div>

                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className={`h-full ${statusColor} rounded-full transition-all duration-500 ease-out`}
                        style={{ width: `${Math.min(percentageUsed, 100)}%` }}
                    />
                </div>

                <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">{percentageUsed.toFixed(1)}% used</span>
                    {percentageUsed >= 100 && (
                        <span className="flex items-center gap-1 text-red-600 font-medium">
                            <AlertTriangle className="h-3 w-3" /> Exceeded
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BudgetCard;
