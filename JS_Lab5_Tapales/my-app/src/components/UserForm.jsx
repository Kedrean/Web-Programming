import { useState } from 'react';
import '../styles/UserForm.css';

export default function UserForm({ user = {}, onSave, onCancel }) {
    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email || '');
    const [avatar, setAvatar] = useState(user.avatar || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const [first_name, ...last] = name.split(' ');
        onSave({
            ...user,
            name,
            first_name,
            last_name: last.join(' '),
            email,
            avatar,
        });
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <h2>{user.id ? 'Edit User' : 'Add User'}</h2>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="Avatar URL (optional)" />
            <div>
                <button type="submit">Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}
