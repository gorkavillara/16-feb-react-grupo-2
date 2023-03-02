import React, { useState } from "react"
import "./Home.scss"

const Home = () => {
    const [doble, setDoble] = useState(true)

    const getH1Style = () => {
        // return `titulo-home${doble && " doble"}`
        return `titulo-home${doble ? " doble" : ""}`
    }

    return (
        <div className="home-view">
            <nav className="navbar"></nav>
            <h1 className={getH1Style()}>Estilos home</h1>
            <button onClick={() => setDoble((prev) => !prev)}>
                Toggle tamaño
            </button>
        </div>
    )
}

export default Home
