import UserCard from './UserCard';
import '../styles/UserList.css';

export default function UserList({ users, onEdit, onDelete }) {
    return (
        <div className="user-list">
            {users.map((user) => (
                <UserCard key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
}