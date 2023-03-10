import { ContadorContext } from "contexts/ContadorContextProvider"
import React, { useContext } from "react"

const Contador = () => {
    const { contador, restaContador, sumaContador } = useContext(ContadorContext)
    console.log(contador)
    return (
        <div>
            <h3>Valor: {contador?.valor}</h3>
            <button onClick={restaContador}>Menos</button>
            <button onClick={sumaContador}>Más</button>
        </div>
    )
}

export default Contador
