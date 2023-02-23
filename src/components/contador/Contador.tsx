import React, { useState } from "react"

interface IProps {
    valorInicial: number
}

const miFuncion = (parametro: any) => {
    if (typeof parametro === "number") return true
    if (typeof parametro === "function") return false
}

const Contador = ({ valorInicial }: IProps) => {
    // const [valorDelEstado, funcionSeteadoraDelValor] = useState(0)
    const [valor, setValor] = useState(valorInicial)
    // console.log(estado)

    // const valorDelEstado = estado[0]
    // const funcionSeteadoraDelValor = estado[1]

    // function decrementa() {
    //     setValor(valor - 1)
    // }
    const decrementa = () => setValor(valor - 1)

    const incrementa = (params: any) => {
        console.log(params)
        // valor++
        // console.log(valor)
        // funcionSeteadoraDelValor(valorDelEstado + 1)
        // setValor(valor + 1)
        // console.log(valor)
        // const miCallback = (valorAnterior: number) => {
        //     return valorAnterior + 1
        // }
        // setValor(valorAnterior => valorAnterior + 1)
        setValor(function(valorAnterior) {
            return valorAnterior + 1
        })
    }
    const sumaCantidad = (cantidad: number, event?: any) => {
        event && console.log(event)
        if (event) console.log(event)
        setValor(valorAnterior => valorAnterior + cantidad)
    }

    return (
        <div>
            <h1>{valor}</h1>
            <button onClick={decrementa}>Menos</button>
            <button onMouseEnter={incrementa} onClick={incrementa}>Más</button>
            <button onClick={(nombrequequieras) => sumaCantidad(3, nombrequequieras)}>Suma 3</button>
            <button onClick={() => sumaCantidad(5)}>Suma 5</button>
        </div>
    )
}

export default Contador
