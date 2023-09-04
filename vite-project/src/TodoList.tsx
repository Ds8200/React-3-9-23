type TodosObj = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

type Props = {
    todos: TodosObj[];
    id: number;
    showTasks: boolean;
    
}

const TodoList = (props: Props) => {
    return (
        <div>
            <h2>Datalis of user:</h2>
            <div>
                <strong>ID :</strong>
                {props.id}
            </div>
            {props.showTasks && (
                <div>
                    <h3>Title :</h3>
                    <p>{props.todos.find((todo) => todo.userId === props.id)?.title}</p>
                </div>
            )}
        </div>
    );
}

export default TodoList;
