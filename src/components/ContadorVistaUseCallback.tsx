import React, { useCallback, useMemo } from "react"
import HijoUseCallback from "./HijoUseCallback"

const ContadorVistaUseCallback = ({ contador }: { contador: number }) => {
    const saluda = useCallback(() => {
        console.log("Hola mundo")
    }, [])
    const saludo = useMemo(() => {
        console.log("Hola mundo")
    }, [])

    return (
        <div>
            <span>Contador: {contador}</span>
            <HijoUseCallback saluda={saluda} />
        </div>
    )
}

export default ContadorVistaUseCallback
