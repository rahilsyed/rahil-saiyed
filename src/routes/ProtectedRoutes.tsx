import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoutes = ({ adminOnly }: { adminOnly: Boolean }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (!user) {
        return <Navigate to='/admin/login' />
    }
    if (!adminOnly && !user) return <Navigate to='/admin/login' />
    return < Outlet />
}

export default ProtectedRoutes