import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getLoggedin, getToken } from '../../redux/slices/authSlice';
import { useLazyGetCurrentUserQuery } from '../../redux/api/authApi';
import PublicRoute from '../Routes/PublicRoute';
import PrivateRoute from '../Routes/PrivateRoute';

const Layout = lazy(() => import('../Layout/Layout'));
const AuthPage = lazy(() => import('../../pages/AuthPage/authPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/registerPage')
);
const LogInPage = lazy(() => import('../../pages/LoginPage/loginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactPage/contactPage'));

export default function App() {
  const token = useSelector(getToken);
  const isLogdedin = useSelector(getLoggedin);

  const [fetchUser] = useLazyGetCurrentUserQuery();
  useEffect(() => {
    if (!isLogdedin && token) {
      fetchUser(null, { skip: !token });
    }
  }, [fetchUser, isLogdedin, token]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<AuthPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
