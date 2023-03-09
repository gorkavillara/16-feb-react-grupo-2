import React from "react"
import { Outlet } from "react-router-dom"

const Users = () => {
    return (
        <div>
            <h1>Ruta usuarios</h1>
            {/* Aquí me renderice el resto de subrutas */}
            <Outlet />
        </div>
    )
}

export default Users
