import React, { createContext, useState } from "react"
import { ContextType, Tarea, TareasContextType } from "models"

export const TareasContext = createContext<ContextType<TareasContextType>>({})

const tareasIniciales: Tarea[] = [
    { id: 1, texto: "Bajar la basura", completado: false }
]

const TareasContextProvider = ({ children }: React.PropsWithChildren) => {
    const [tareas, setTareas] = useState(tareasIniciales)

    const nuevaTarea = (nuevoTexto: string) => {
        setTareas((prevTareas) => [
            ...prevTareas,
            {
                id: prevTareas.length + 1,
                texto: nuevoTexto,
                completado: false
            }
        ])
    }

    return (
        <TareasContext.Provider
            value={ { tareas, nuevaTarea } }
            children={children}
        />
    )
}

export default TareasContextProvider
