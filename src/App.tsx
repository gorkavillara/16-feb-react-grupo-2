/* eslint-disable */
import { useState } from "react"
import Contador from "views/Contador"
import "./App.css"

function App() {
    const [user, setUser] = useState({
        username: "gorkavillar",
        id: 12,
        preferences: { darkMode: true }
    })
    const [generalSettings, setGeneralSettings] = useState({
        username: "gorkavillar",
        id: 12,
        preferences: { darkMode: true }
    })
    return (
        <div className="App">
            <Contador />
        </div>
    )
}

export default App
