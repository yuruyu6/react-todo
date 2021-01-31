import Todo from "./Todo";


function List({todos, onEdit, onUpdate, onDelete}) {
    return (
        <div className="List">
            {todos.map(todo =>
                (
                    <Todo
                        key={todo.id} todo={todo}
                        onEdit={onEdit.bind(null)}
                        onDelete={onDelete.bind(null, todo.id)}
                        onUpdate={onUpdate.bind(null, todo.id)}
                    />
                ))
            }

        </div>
    )
}

export default List;
