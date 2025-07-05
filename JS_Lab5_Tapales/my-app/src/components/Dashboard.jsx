import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import UserList from './UserList';
import UserForm from './UserForm';
import '../styles/Dashboard.css';

export default function Dashboard({ usersRef }) {
    const [editingUser, setEditingUser] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleAdd = () => {
        setEditingUser(null);
        setShowForm(true);
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        usersRef.current = usersRef.current.filter((u) => u.id !== id);
    };

    const handleSave = (user) => {
        if (user.id) {
            usersRef.current = usersRef.current.map((u) => (u.id === user.id ? user : u));
        } else {
            const newUser = { ...user, id: Date.now() };
            usersRef.current = [...usersRef.current, newUser];
        }
        setShowForm(false);
    };

    return (
        <div className="dashboard">
            <header>
                <h1>User Dashboard</h1>
                <button onClick={() => { logout(); navigate('/login'); }}>Logout</button>
            </header>
            <button onClick={handleAdd}>Add User</button>
            <UserList users={usersRef.current} onEdit={handleEdit} onDelete={handleDelete} />
            {showForm && <UserForm user={editingUser} onSave={handleSave} onCancel={() => setShowForm(false)} />}
        </div>
    );
}