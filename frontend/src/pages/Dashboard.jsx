import { useState, useEffect } from 'react';
import { dashboardService } from '../services/dashboardService';
import StatsCard from '../components/StatsCard';
import CategoryPieChart from '../components/CategoryPieChart';
import DailyTrendChart from '../components/DailyTrendChart';
import LoadingSpinner from '../components/LoadingSpinner';
import { DollarSign, CreditCard, ShoppingBag, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [categoryData, setCategoryData] = useState([]);
    const [trendData, setTrendData] = useState([]);
    const [monthlyComparison, setMonthlyComparison] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [statsData, categoryRes, trendRes, comparisonRes] = await Promise.all([
                    dashboardService.getStats(),
                    dashboardService.getCategoryBreakdown(),
                    dashboardService.getDailyTrends(),
                    dashboardService.getMonthlyComparison()
                ]);

                setStats(statsData);
                setCategoryData(categoryRes);
                setTrendData(trendRes);
                setMonthlyComparison(comparisonRes);
            } catch (err) {
                console.error('Error fetching dashboard data:', err);
                setError('Failed to load dashboard data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <LoadingSpinner />;

    if (error) {
        return (
            <div className="flex items-center justify-center h-full text-red-600">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500">Overview of your financial activity</p>
                </div>
                <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
                    {format(new Date(), 'MMMM yyyy')}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Total Spent (Month)"
                    value={`$${stats?.totalSpentThisMonth?.toFixed(2) || '0.00'}`}
                    type={monthlyComparison?.status === 'INCREASED' ? 'increase' : 'decrease'}
                    subValue={`${monthlyComparison?.percentageChange?.toFixed(1) || 0}% vs last month`}
                    icon={DollarSign}
                />
                <StatsCard
                    title="Spent Today"
                    value={`$${stats?.totalSpentToday?.toFixed(2) || '0.00'}`}
                    icon={CreditCard}
                />
                <StatsCard
                    title="Transactions (Month)"
                    value={stats?.transactionCountThisMonth || 0}
                    icon={ShoppingBag}
                />
                <StatsCard
                    title="Avg. Daily Spending"
                    value={`$${stats?.averageDailySpending?.toFixed(2) || '0.00'}`}
                    icon={Calendar}
                />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DailyTrendChart data={trendData} />
                <CategoryPieChart data={categoryData} />
            </div>
        </div>
    );
};

export default Dashboard;
