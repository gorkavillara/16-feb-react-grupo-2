import React from "react"

export interface Tarea {
    id: number
    texto: string
    completado: boolean
}

export type TareasContextType = {
    tareas: Tarea[]
    setTareas: React.Dispatch<React.SetStateAction<Tarea[]>>
    name: string
    nuevaTarea: (texto: string) => void
}

export type ContextType<T> = {
    [Prop in keyof T]?: T[Prop]
}

export type ActionType = "INCREMENTA" | "DECREMENTA"

export interface ContadorState {
    valor: number
}

export interface ContadorContextInterface {
    contador: ContadorState
    dispatchContador: React.Dispatch<{
        payload?: any
        type: ActionType
    }>
    restaContador: () => void
    sumaContador: () => void
}
