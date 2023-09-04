type TodosObj = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
git init
git add README.md
git commit -m "first commit"
git commit -m "first commit"
git remote add origin https://github.com/Ds8200/React-3-9-23.git
git push -u origin main
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
