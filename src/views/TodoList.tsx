import React from "react"
import styles from "./TodoList.module.scss"

interface Todo {
    id: number
    texto: string
    completado: boolean
}

// const todos = ["Bajar la basura", "Ver ganar al Madrid", "Jugar a la switch"]
const todos: Todo[] = [
    { id: 1, texto: "Bajar la basura", completado: false },
    { id: 2, texto: "Ver ganar al Barça", completado: false },
    { id: 3, texto: "Tender la ropa", completado: false },
]

const TodoList = () => {
    return (
        <div>
            <h1 className={styles.titulo}>Estos son los todos</h1>
            <ul className={styles.lista}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.texto}</li>
                    // <li key={`${index}. ${todo}`}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
