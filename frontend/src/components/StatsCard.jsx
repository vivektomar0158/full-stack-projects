import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const StatsCard = ({ title, value, subValue, type, icon: Icon }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>

                    {subValue && (
                        <div className={`flex items-center mt-2 text-sm ${type === 'increase' ? 'text-red-600' :
                                type === 'decrease' ? 'text-green-600' : 'text-gray-500'
                            }`}>
                            {type === 'increase' && <TrendingUp className="h-4 w-4 mr-1" />}
                            {type === 'decrease' && <TrendingDown className="h-4 w-4 mr-1" />}
                            <span>{subValue}</span>
                        </div>
                    )}
                </div>

                <div className="p-3 bg-blue-50 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
