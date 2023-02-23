import React, { useEffect, useState } from "react"

class MiClase extends React.PureComponent {
    render() {
        return <h1>Hola desde el componente</h1>
    }
}

function CicloVidaFuncional() {
    const [status, setStatus] = useState<boolean | null>(null)

    // 1 - Cuando el componente ha sido montado
    useEffect(() => {
        console.log("El componente ha sido montado")
        return () => {
            console.log("El componente se va a desmontar 1")
        }
    }, [])

    // 2 - Cuando el componente ha actualizado alguna dependencia
    useEffect(() => {
        if (status === null) return
        const miArray = [{ nombre: "Twingo" }, { nombre: "Kawasaki" }]
        console.log("La Dependencia status ha cambiado")
        for (let i = 0; i < 10; i++) {
            console.log(`Hola mundo ${(i + 1)}`)
        }
        return () => {
            console.log(status)
        }
    }, [status])

    // 3 - Cuando el componente va a desmontarse
    useEffect(() => {
        // Ejecutamos todo lo que queramos
        return () => {
            console.log("El componente se va a desmontar 2")
        }
    }, [])

    const cambiaEstado = () => {
        setStatus(!status)
        // console.log(status)
    }
    return (
        <div>
            <h1>Ciclo de vida Funcional</h1>
            <button onClick={cambiaEstado}>{status ? "Off" : "On"}</button>
            <MiClase />
        </div>
    )
}

export default CicloVidaFuncional
