import React from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    const hazLogin = () => {
        console.log("Redireccionando...")
        setTimeout(() => {
            // Aquí vamos a hacer la redirección
            navigate("/")
        }, 2000)
    }
    return (
        <>
            <h1>Login</h1>
            <div>Formulario muy completo y todo lo que quieras</div>
            <button onClick={hazLogin}>Login</button>
        </>
    )
}

export default Login
