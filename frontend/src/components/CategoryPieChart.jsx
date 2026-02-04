import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const CategoryPieChart = ({ data }) => {
    if (!data || data.length === 0) {
        return (
            <div className="h-80 flex items-center justify-center text-gray-500 bg-white rounded-xl border border-gray-100">
                No data available
            </div>
        );
    }

    // Predefined colors if category color not available
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Expense Breakdown</h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="amount"
                        nameKey="categoryName"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.categoryColor || COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip
                        formatter={(value) => `$${value.toFixed(2)}`}
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend layout="vertical" align="right" verticalAlign="middle" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CategoryPieChart;
