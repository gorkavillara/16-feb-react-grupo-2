import React, { useEffect, useRef } from "react"

const EventosListeners = () => {
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!window) return
        window.addEventListener("resize", (event: UIEvent) => {
            console.log(event)
        })
        return () => {
            window.removeEventListener("resize", () => null)
        }
    }, [])

    useEffect(() => {
        if (divRef.current === null) return
        const divElement = divRef.current
        // 1 - Setear el nuevo listener
        divRef.current.addEventListener("click", (event: UIEvent) => {
            console.log(event)
        })
        // 2 - Limpiarlo con el desmontado
        return () => {
            divElement.removeEventListener("click", () => null)
        }
    }, [divRef])

    return <div ref={divRef}>EventosListeners</div>
}

export default EventosListeners
