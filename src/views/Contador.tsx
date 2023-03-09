import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "app/store"
import { incrementa, decrementa } from "features/contador/contadorSlice"

const Contador = () => {
    const contador = useSelector<RootState, number>(state => state.contador.valor)

    const dispatch = useDispatch()

    const decrementaContador = () => {
        dispatch(decrementa(2))
    }
    const incrementaContador = () => {
        dispatch(incrementa(18))
    }

    return (
        <div>
            <h3>Valor: {contador}</h3>
            <button onClick={decrementaContador}>Menos</button>
            <button onClick={incrementaContador}>Más</button>
        </div>
    )
}

export default Contador
