import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import './App.css';

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
    const usersRef = useRef([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1', {
            headers: {
                'x-api-key': 'reqres-free-v1' // 🔁 Replace with your real API key
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch users');
                }
                return res.json();
            })
            .then(data => {
                usersRef.current = data.data; // or just data if using other API
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching users:', err);
                usersRef.current = [];
                setLoading(false);
            });
    }, []);


    if (loading) return <div>Loading users...</div>;

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginForm usersRef={usersRef} />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard usersRef={usersRef} />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;