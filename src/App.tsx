/* eslint-disable */
import React, { useState } from "react"
import "./App.css"
import { Home, Contact, Users } from "views"

// const routes = [
//     { route: "home", component: Home },
//     { route: "users", component: Users },
//     { route: "contact", component: Contact },
// ]

// const routes = {
//     home: <Home />,
//     users: <Users />,
//     contact: <Contact />
// }

function App() {
    const [route, setRoute] = useState("home")
    // const [route, setRoute] = useState({ route: "contact", component: Contact })

    // if (route === "contact") return <h2>Contact</h2>
    // if (route === "home") return <h1>Home</h1>

    return (
        <div className="App">
            <div>
                {/* <button onClick={() => setRoute("home")}>Home</button>
                <button onClick={() => setRoute("contact")}>Contact</button>
                <button onClick={() => setRoute("users")}>Users</button> */}
            </div>

            {route === "home" && <Home />}
            {route === "contact" && <Contact />}
            {route === "users" && <Users />}
            
            {/* <route.component /> */}
        </div>
    )
}

export default App
