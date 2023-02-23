import React from "react"
import CompHijo from "./CompHijo"
import CompHijoClase from "./CompHijoClase"

const CompPadre = () => {
    return (
        <div>
            <h1>CompPadre</h1>
            <a href="https://google.com" rel="">Google</a>
            <CompHijo mensaje="React" />
            <CompHijoClase mensaje="Aprendiendo tipos" />
        </div>
    )
}

export default CompPadre
