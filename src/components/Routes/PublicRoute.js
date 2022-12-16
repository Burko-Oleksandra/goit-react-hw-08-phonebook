import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedin } from '../../redux/slices/authSlice';

export default function PublicRoute() {
  const isLoggedin = useSelector(getLoggedin);
  return isLoggedin ? <Navigate to="/contacts" /> : <Outlet />;
}
