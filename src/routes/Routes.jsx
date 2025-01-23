import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import Layout from '../components/layout/Layout';
import Home from "../pages/Home";
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

const AuthRedirect = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  return isAuthenticated ? <Navigate to="/home" replace /> : <LoginPage />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthRedirect />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Layout><Home /></Layout>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;