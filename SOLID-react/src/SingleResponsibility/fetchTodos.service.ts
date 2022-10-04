import axios from "axios";
import { TTodo } from "./todo.declarations";

export function fetchTodos() {
    return axios.get<TTodo[]>("https://jsonplaceholder.typicode.com/todos")
        .catch((e) => {
            console.error(e);
        })
        .then((res: any) => res.data);
}
