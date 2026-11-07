import React, { createContext, useEffect } from 'react'


interface AuthContextType {
    login: (userData: any, token: string) => void;
    logout: () => void;
    user: any;
    token:string |null;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextType |undefined>(undefined);



export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [token, setToken] = React.useState<string | null>("")

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken)
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
        <AuthContext.Provider value={{ login, logout, user, loading,token }}>{children}</AuthContext.Provider>
    )
}