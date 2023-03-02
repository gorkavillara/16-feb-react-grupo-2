import React, { useState } from "react"

const Formulario = () => {
    const [nombre, setNombre] = useState("Bruno")
    const [apellido, setApellido] = useState("Escalona")
    const [email, setEmail] = useState("bruno@escalona.com")
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        // Aquí dentro realizamos la lógica
        console.log("Se ha enviado el formulario")
    }

    return (
        <div>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={event => setNombre(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Tu apellido"
                    value={apellido}
                    onChange={event => setApellido(event.target.value)}
                />
                <input
                    type="email"
                    placeholder="Tu email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                {/* <p>{nombre}</p> */}
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Formulario
