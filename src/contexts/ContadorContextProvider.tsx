import React, { createContext, useReducer } from "react"

const ContadorContext = createContext(null)

const contadorReducer = () => {
}

const ContadorContextProvider = ({ children }: React.PropsWithChildren) => {
    const reductor = useReducer(contadorReducer, { valor: 0 })

    return <ContadorContext.Provider value={null} children={children} />
}

export default ContadorContextProvider
