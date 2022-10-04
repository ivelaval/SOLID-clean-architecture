
export type TTodoItem = {
    id: number;
    title: string;
}

export function Item({ id , title }: TTodoItem) {
    return (
        <li>
            <span>{id}</span>
            <span>{title}</span>
        </li>
    )
}