import api from "../api/axios"

export const _fetchBlogs =async()=>{
    try {
        const response = await api.get('/api/blogs/getAllPosts');
        return response.data
    } catch (error:any) {
         throw new Error(error.response.data.message || 'Failed to fetch dashboard data');
    }
}