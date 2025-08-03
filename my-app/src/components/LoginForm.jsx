import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/LoginForm.css';

const DEFAULT_PASSWORD = 'password123';

export default function LoginForm({ usersRef }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = usersRef.current || []; // <-- fallback to empty array
        const user = users.find((u) => u.email === email);

        if (user && password === DEFAULT_PASSWORD) {
            login();
            navigate('/dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
}