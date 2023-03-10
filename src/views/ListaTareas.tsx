import React, { useContext } from "react"
import { TareasContext } from "contexts/TareasContextProvider"

const ListaTareas = () => {
    const { tareas, nuevaTarea } = useContext(TareasContext)
    // console.log(tareas)

    const addReact = () => {
        if (!nuevaTarea) return
        
        nuevaTarea("Aprender React")
    }

    return (
        <div>
            <h1 style={{ color: "red" }}>Lista de tareas</h1>
            {tareas?.map((tarea) => (
                <li key={tarea.id}>{tarea.texto}</li>
            ))}
            <button onClick={addReact}>Añade aprender React</button>
        </div>
    )
}

export default ListaTareas
