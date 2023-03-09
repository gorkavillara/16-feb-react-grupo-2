/* eslint-disable */
import { Link, Outlet } from "react-router-dom"
import { routesNav } from "routes"
import "./App.css"

function App() {
    return (
        <div className="App">
            <nav>
                {routesNav.map((route) =>
                    typeof route.path === "string" ? (
                        <span key={route.id}>
                            <Link to={route.path}>{route.id}</Link>
                        </span>
                    ) : null
                )}
                {/* <span>Home</span>
                <span>
                    <a href="/contacto">Contact</a>
                </span>
                <span>
                    <Link to="/usuarios">Users</Link>
                </span> */}
            </nav>
            <Outlet />
        </div>
    )
}

export default App
