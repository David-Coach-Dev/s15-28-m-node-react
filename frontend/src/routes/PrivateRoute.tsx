import { Outlet, Navigate } from 'react-router';
import { useAuthUser } from '../context/auth-context';

const ProtectedRoutes: React.FC = () => {

    const { isAuthenticated } = useAuthUser();

    return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />

}
export default ProtectedRoutes;