import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import HomePage from './pages/HomePage';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from './AuthContext'; 

function App() {
    const location = useLocation();

    return (
        <AuthProvider>
            <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                {location.pathname !== '/login' && <Header />}

                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/" element={<ProtectedRoute />}/>
                    <Route path="*" element={<Navigate replace to="/"/>}/>
                </Routes>

                {location.pathname !== '/login' && <Footer />}
            </div>
        </AuthProvider>
    );
}

function ProtectedRoute() {
    const { isLogin } = useAuth();
    return isLogin ? <HomePage /> : <Navigate replace to="/login" />;
}

export default App;
