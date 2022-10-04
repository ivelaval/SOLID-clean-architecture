import { TTodo } from "./todo.declarations";
import {useEffect, useState} from "react";
import { fetchTodos } from "./fetchTodos.service";

export function useFetchTodo() {
    const [todos, setTodos] = useState<TTodo[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        fetchTodos()
            .then(data => setTodos(data))
            .finally(() => setIsFetching(false));
    }, []);

    return { todos , isFetching };
}