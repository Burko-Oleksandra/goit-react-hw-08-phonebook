import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedin } from '../../redux/slices/authSlice';

export default function PrivateRoute() {
  const isLoggedin = useSelector(getLoggedin);
  return isLoggedin ? <Outlet /> : <Navigate to="/" />;
}
