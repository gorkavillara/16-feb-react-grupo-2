import React, { useState } from "react"

const Eventos = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false)

    const handleCopy = (event: React.ClipboardEvent<HTMLParagraphElement>) => {
        event.preventDefault()
        // Llamada a un post
        alert("Te he dicho que este mensaje no lo puedes copiar")
    }
    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault()
        alert("Te he dicho que no puedes pegar tu email")
    }

    const handleHover = () => {
        console.log("he hecho hover")
        setMostrarFormulario(true)
    }
    return (
        <div>
            <p className="texto-protegido" onCopy={handleCopy}>
                Este texto no lo puedes copiar
            </p>
            <input type="email" placeholder="Confirma tu email (no lo pegues)" onPaste={handlePaste} />
            <br />
            {mostrarFormulario
                ? <h1>Imagínate que este es el formulario</h1>
                : <span onMouseEnter={handleHover} style={
                    { backgroundColor: "#ddd" }
                }>...</span>
            }
        </div>
    )
}

export default Eventos
