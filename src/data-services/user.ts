import api from "../api/axios";


export const _login = async (email: string, password: string) => {
    const response = await api.post('/api/user/login', {
        email, password
    })
    return response.data;
}


