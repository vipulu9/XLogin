import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload on submit

        // Check if both username and password are filled
        if (!username || !password) {
            setMessage('Both fields are required.');
            return;
        }

        // Validate credentials
        if (username === 'user' && password === 'password') {
            setMessage('Welcome, user!');
        } else {
            setMessage('Invalid username or password.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className={`message ${message === 'Welcome, user!' ? 'success' : 'error'}`}>
                {message}
            </div>
        </div>
    );
};

export default Login;
