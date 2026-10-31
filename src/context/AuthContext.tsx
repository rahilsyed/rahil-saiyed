import React, { createContext, useEffect } from 'react'


interface AuthContextType {
    login: (userData: any, token: string) => void;
    logout: () => void;
    user: any;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);



export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(false);


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false)
    }, []);

    const login = (userData: any, token: any) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData)
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ login, logout, user, loading }}>{children}</AuthContext.Provider>
    )
}