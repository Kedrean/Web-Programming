import '../styles/UserCard.css';

export default function UserCard({ user, onEdit, onDelete }) {
    return (
        <div className="user-card">
            <img src={user.avatar || 'https://via.placeholder.com/100'} alt="Avatar" />
            <h3>{user.first_name || user.name} {user.last_name || ''}</h3>
            <p>{user.email}</p>
            <div>
                <button onClick={() => onEdit(user)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
            </div>
        </div>
    );
}