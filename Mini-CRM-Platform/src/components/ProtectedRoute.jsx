import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';

const ProtectedRoute = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
