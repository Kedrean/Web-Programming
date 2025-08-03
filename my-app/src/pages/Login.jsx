import React, { useState } from 'react';
import { users } from '../components/auth';

function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const match = users.find(user => user.username === username && user.password === password);
        if (match) {
            onLoginSuccess();
        } else {
            setError('Invalid credentials.');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                />
                <button type="submit">Login</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Login;
