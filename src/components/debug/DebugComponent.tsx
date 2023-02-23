// rafce
import React from "react"

const DebugComponent = () => {
    const clic = () => {
        console.time("Clic en el botón")
        console.log("Hola mundo")

        console.warn(
            "CUIDADO - te estás acercando al máximo número de llamadas"
        )
        console.error("ERROR - se ha alcanzado el máximo número de llamadas")

        const misAlumnos = [
            { nombre: "Eduard", nota: 9.1 },
            { nombre: "Carlos", nota: 9.9 },
            { nombre: "Sergi", nota: 9.2 },
            { nombre: "Emily", nota: 10 },
        ]

        console.table(misAlumnos)

        // Voy a asumir que el número de alumnos aprobados es mayor que 3
        console.assert(
            misAlumnos.filter((alumno) => alumno.nota >= 5).length > 1,
            "Los alumnos que han aprobado son menos que 10"
        )

        for (let i = 0; i < 1000000000; i++) {
            const a = i + 1
        }

        console.timeEnd("Clic en el botón")
    }
    return (
        <div>
            <button onClick={clic}>Clic</button>
        </div>
    )
}

export default DebugComponent
