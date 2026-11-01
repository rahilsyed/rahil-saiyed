import api from "../api/axios"

export const _dashboardData = async () => {
    try {
        const response = await api.get('/api/dashboard/get')
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.message || 'Failed to fetch dashboard data');
    }
}