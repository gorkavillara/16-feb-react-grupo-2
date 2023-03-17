import React, { useEffect, useState } from "react"
import axios from "axios"

const url = "https://43ac-178-237-235-152.eu.ngrok.io/users"

export interface IUser {
    id: number
    email: string
    password: string
    username: string
}

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState<IUser[]>([])

    useEffect(() => {
        // Obtener el listado
        axios
            .post<{ users: IUser[] }>(url, {
                action: "getUsers"
            })
            .then((res) => setUsuarios(res.data.users))
            // .then((res) => setUsuarios(res.data))
            .catch(console.error)
    }, [])

    return (
        <div>
            {usuarios.length > 0 ? (
                <ul>
                    {usuarios.map((usuario) => (
                        <li key={usuario.id}>
                            {usuario.username} - {usuario.email}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Todavía no hay usuarios</p>
            )}
        </div>
    )
}

export default Usuarios
