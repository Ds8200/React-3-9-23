import { useState } from 'react';
import TodoList from './TodoList';

type UserObj = {
    id: number;
    name: string;
    email: string;
};

type TodosObj = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

type Props = {
    users: UserObj[];
    onItemClick: (userId: number) => void;
    onToggleTasks: () => void;
    todos: TodosObj[];
    id: number | null;
    showTasks: boolean;
}


const UserCard = (props: Props) => {
    const [openTasks, setOpenTasks] = useState<number | null>(null);

    const toggleTasks = (userId: number) => {
        if (openTasks === userId) {
            setOpenTasks(null);
        } else {
            setOpenTasks(userId);
        }
    };

    return (
        <>
            {props.users.map((user: UserObj) => (
                <div key={user.id} onClick={() => {
                    props.onItemClick(user.id);
                    toggleTasks(user.id);
                    props.onToggleTasks();
                }}
                    style={{
                        background: "skyblue",
                        border: "1px solid black",
                        margin: "10px",
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <p>ID: {user.id}, </p>
                    <p>Name: {user.name}, </p>
                    <p>Email: {user.email}.</p>
                    {openTasks === user.id && (
                        <>
                            {props.showTasks && props.id && (
                                <TodoList
                                    todos={props.todos}
                                    id={props.id}
                                    showTasks={props.showTasks}
                                />
                            )}
                        </>
                    )}
                </div>
            ))}
        </>
    );
}

export default UserCard;
