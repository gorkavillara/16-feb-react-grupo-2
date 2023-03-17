import React, { useState } from "react"

const Contador = ({ valorInicial }: { valorInicial?: number }) => {
    const [contador, setContador] = useState(valorInicial || 0)
    return (
        <div>
            <p aria-label="text-value">
                Valor: <span aria-label="cont-value">{contador}</span>
            </p>
            <button
                aria-label="increment-button"
                onClick={() => setContador((prev) => prev + 1)}
            >
                Más
            </button>
        </div>
    )
}

export default Contador
