import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const DailyTrendChart = ({ data }) => {
    if (!data || data.length === 0) {
        return (
            <div className="h-80 flex items-center justify-center text-gray-500 bg-white rounded-xl border border-gray-100">
                No data available
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Daily Spending Trend</h3>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis
                        dataKey="date"
                        tickFormatter={(date) => format(new Date(date), 'MMM d')}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6B7280', fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6B7280', fontSize: 12 }}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip
                        formatter={(value) => [`$${value}`, 'Amount']}
                        labelFormatter={(date) => format(new Date(date), 'MMM d, yyyy')}
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#3B82F6"
                        fillOpacity={1}
                        fill="url(#colorAmount)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DailyTrendChart;
