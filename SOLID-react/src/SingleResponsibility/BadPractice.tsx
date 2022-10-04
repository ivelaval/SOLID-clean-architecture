import { useEffect, useState } from "react";
import axios from "axios";

type TodoType = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

function TodoList() {
    const [data, setData] = useState<TodoType[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios.get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                setData(res.data);
            })
            .catch((e) => {
                console.error(e);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);

    if (isFetching) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            {data.map((todo) => {
                return (
                    <li>
                        <span>{todo.id}</span>
                        <span>{todo.title}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList;