import React, { useRef } from "react"

const EventosKeyboard = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleKeyDown = (event: React.KeyboardEvent) => {
        // console.log(`La tecla pulsada es la: ${event.key}`)
        if (event.key !== "Enter") return

        console.log("Enviando formulario...")
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log("Enviando el formulario")
        // Gestionaríamos el envío del formulario con un fetch o axios

        const elemento = inputRef.current!
        const value = elemento.value

        console.log("Valor", value)
    }
    return (
        <div>
            <h3>Un mago no llega pronto ni tarde, sino cuando se lo propone</h3>
            <form onSubmit={handleSubmit}>
                <input id="input-text" ref={inputRef} type="text" onKeyDown={handleKeyDown} />
                <input type="number" max={12} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default EventosKeyboard
