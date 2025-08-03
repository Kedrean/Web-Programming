import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';

import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            {isAuthenticated && <Navbar />}
            <div className={isAuthenticated ? 'page-wrapper' : 'login-wrapper'}>
                <Routes>
                    <Route path="/" element={
                        isAuthenticated
                            ? <Navigate to="/home" />
                            : <Login onLoginSuccess={() => setIsAuthenticated(true)} />
                    } />
                    <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
                    <Route path="/about" element={isAuthenticated ? <AboutUs /> : <Navigate to="/" />} />
                    <Route path="/contact" element={isAuthenticated ? <ContactUs /> : <Navigate to="/" />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;