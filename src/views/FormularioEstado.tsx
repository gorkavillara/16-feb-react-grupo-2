import React, { useState } from "react"

type FormType = {
    nombre: string
    apellido: string
    email: string
    isDeveloper: boolean
}

const initialData: FormType = {
    nombre: "Sergi",
    apellido: "Blázquez",
    email: "juancarlos@perez.mayo",
    isDeveloper: true,
}

const FormularioEstado = () => {
    const [formData, setFormData] = useState(initialData)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        // Aquí dentro realizamos la lógica
        console.log("Se ha enviado el formulario")
    }

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        //@ts-ignore
        const name = event.target.name
        setFormData((prevData) => ({
            ...prevData,
            //@ts-ignore
            [name]: event.target.value,
        }))
    }

    return (
        <div>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tu nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Tu apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Tu email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                />
                {/* <p>{nombre}</p> */}
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default FormularioEstado
