import React from "react"
import { ICompHijoProps } from "../../models"

// type TCompHijoProps = { mensaje: string }
// interface ICompHijoProps {
//     mensaje: string
// }

const CompHijo = ({ mensaje }: ICompHijoProps) => {
    // console.log(props.mensaje)
    
    // const { mensaje } = props
    // const mensaje = props.mensaje

    return <div>{mensaje}</div>
}

export default CompHijo
