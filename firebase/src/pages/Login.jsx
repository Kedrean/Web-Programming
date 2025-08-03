import React, { useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", username), where("password", "==", password));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            navigate("/articles");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <form onSubmit={handleLogin} style={{ padding: "2rem" }}>
            <h2>Login</h2>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <br />
            <br />
            <button type="submit">Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}

export default Login;
