import { useState, useEffect } from 'react';
import UserCard from './UserCard';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

type TodosObj = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const UsersFromServer = (): JSX.Element => {
    const [usersData, setUsersData] = useState<User[]>([]);
    const [todosData, setTodosData] = useState<TodosObj[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [showTasks, setShowTasks] = useState<boolean>(false);

    const importUsersFromServer = async () => {
        const importData = await fetch("https://jsonplaceholder.typicode.com/users");
        const userData = await importData.json();
        setUsersData(userData);
    }

    const importTodosFromServer = async () => {
        const importData = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todosData = await importData.json();
        setTodosData(todosData);
    }

    useEffect(() => {
        importUsersFromServer();
        importTodosFromServer();
    }, []);

    const handleItemClick = (userId: number) => {
        setSelectedUserId(userId);
        setShowTasks(false);
    };

    const handleToggleTasks = () => {
        setShowTasks(!showTasks);
    };

    return (
        <div>
            <UserCard
                todos={todosData}
                id={selectedUserId}
                showTasks={showTasks}
                users={usersData}
                onItemClick={handleItemClick}
                onToggleTasks={handleToggleTasks}
            />
        </div>
    );
}

export default UsersFromServer;
