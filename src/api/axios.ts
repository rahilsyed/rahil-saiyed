import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})


api.interceptors.response.use((res) => res, (err) => {
    if (err.response.data.status === false && err.response.data.message ===  "jwt expired") {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = "/admin/login";
    }
    return Promise.reject(err)
})

export default api;