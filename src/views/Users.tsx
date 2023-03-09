import React from "react"
import { Outlet, Link } from "react-router-dom"

type User = {
    id: number
    name: string
}

const myUsers: User[] = [
    { id: 1, name: "Sergi" },
    { id: 2, name: "Bruno" },
    { id: 3, name: "Carlos" },
    { id: 4, name: "Eduard" },
    { id: 5, name: "Juan Carlos" },
    { id: 6, name: "Bryan" }
]

const Users = () => {
    return (
        <div>
            <h1>Ruta usuarios</h1>
            {myUsers.map((user) => (
                <Link to={`/usuarios/${user.id}`} key={user.id}>
                    {user.name}
                </Link>
            ))}
            {/* Aquí me renderice el resto de subrutas */}
            <Outlet />
        </div>
    )
}

export default Users
