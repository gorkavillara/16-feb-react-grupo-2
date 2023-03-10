import { ContadorContextInterface, ContextType } from "models"
import React, { createContext, useReducer } from "react"
import contadorReducer from "reducers/contadorReducer"

export const ContadorContext = createContext<ContextType<ContadorContextInterface>>({})

const ContadorContextProvider = ({ children }: React.PropsWithChildren) => {
    //@ts-ignore
    const [contador, dispatchContador] = useReducer(contadorReducer, {
        valor: 21
    })
    // console.log(reductor)

    const restaContador = () => {
        if (!dispatchContador) return
        dispatchContador({ type: "DECREMENTA" })
    }

    const sumaContador = () => {
        if (!dispatchContador) return
        dispatchContador({ type: "INCREMENTA" })
    }


    return <ContadorContext.Provider value={{ contador, dispatchContador, restaContador, sumaContador }} children={children} />
}

export default ContadorContextProvider
