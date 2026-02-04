import api from './api';

export const budgetService = {
    getBudgets: async (year, month) => {
        const params = {};
        if (year) params.year = year;
        if (month) params.month = month;

        // Default to current month/year if not specified, 
        // but the backend does that too.

        const response = await api.get('/budgets', { params });
        return response.data;
    },

    createBudget: async (budgetData) => {
        const response = await api.post('/budgets', budgetData);
        return response.data;
    },

    updateBudget: async (id, budgetData) => {
        const response = await api.put(`/budgets/${id}`, budgetData);
        return response.data;
    },

    deleteBudget: async (id) => {
        await api.delete(`/budgets/${id}`);
    },
};
