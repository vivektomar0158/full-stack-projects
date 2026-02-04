import api from './api';

export const dashboardService = {
    getStats: async () => {
        const response = await api.get('/dashboard/stats');
        return response.data;
    },

    getCategoryBreakdown: async (year, month) => {
        const params = {};
        if (year) params.year = year;
        if (month) params.month = month;

        const response = await api.get('/dashboard/category-breakdown', { params });
        return response.data;
    },

    getDailyTrends: async (year, month) => {
        const params = {};
        if (year) params.year = year;
        if (month) params.month = month;

        const response = await api.get('/dashboard/trends', { params });
        return response.data;
    },

    getMonthlyComparison: async () => {
        const response = await api.get('/dashboard/monthly-comparison');
        return response.data;
    },
};
