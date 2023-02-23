import React, { Component } from "react"

interface TipoProps {
}

interface TipoEstado {
    valor: number,
    otracosa: boolean,
    datos: any[]
}

export default class ContadorClase extends Component<TipoProps, TipoEstado> {
    state = {
        valor: 1,
        otracosa: true,
        datos: [1, 2, 3, 4, 5]
    }

    incrementa = () => {
        this.setState(previousState => ({
            ...previousState,
            valor: previousState.valor + 1
        }))
    }
    render() {
        const { valor } = this.state
        return (
            <div>
                <h1>{valor}</h1>
                <button onClick={this.incrementa}>Más</button>
                {/* <button onClick={decrementa}>Menos</button>
                <button onMouseEnter={incrementa} onClick={incrementa}>
                    Más
                </button>
                <button
                    onClick={(nombrequequieras) =>
                        sumaCantidad(3, nombrequequieras)
                    }
                >
                    Suma 3
                </button>
                <button onClick={() => sumaCantidad(5)}>Suma 5</button> */}
            </div>
        )
    }
}
