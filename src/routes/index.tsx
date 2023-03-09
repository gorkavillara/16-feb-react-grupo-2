import { RouteObject, Navigate } from "react-router-dom"
import App from "App"
import Users from "views/Users"
import Login from "views/Login"
import UserDetails from "components/UserDetails"

const isAdmin = () => Math.random() > 0.5

const protectRoute = (element: JSX.Element) => {
    const hasPermission = isAdmin()
    console.log(hasPermission)

    // return hasPermission ? element : <Navigate to="/" />

    if (hasPermission) return element

    return <Navigate to="/" />
}

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        id: "App",
        children: [
            { path: "", element: <h1>Esto es la home</h1>, id: "Home" },
            {
                path: "contacto",
                element: protectRoute(<h1>Esto es el contacto</h1>),
                id: "Contact"
            },
            {
                path: "usuarios",
                element: <Users />,
                id: "Users",
                children: [
                    { path: "detalles", element: <p>Detalles de usuarios</p> },
                    { path: "config", element: <p>Configuración</p> },
                    { path: ":id", element: <UserDetails /> }
                ]
            },
            // { path: "usuarios/info", element: <h1>Info de usuarios</h1>, id: "User info" },
            { path: "login", element: <Login />, id: "Login" }
        ]
    }
]

export const routesNav = routes[0].children?.map((route) => ({
    id: route.id,
    path: route.path
}))!

export default routes
