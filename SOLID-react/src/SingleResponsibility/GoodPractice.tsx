import { TTodo } from "./todo.declarations";
import { useFetchTodo } from "./useTodos.hook";
import { Item } from "./Item";
import { Loader } from "./Loader";

function TodoList() {
    const { todos, isFetching } = useFetchTodo();

    if (isFetching) {
        return <Loader />;
    }

    return (
        <ul>
            {todos.map((todo: TTodo) => <Item id={todo.id} title={todo.title} />)}
        </ul>
    )
}

export default TodoList;