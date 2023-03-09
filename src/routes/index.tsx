import { RouteObject } from "react-router-dom"
import App from "App"
import Users from "views/Users"

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        id: "App",
        children: [
            { path: "", element: <h1>Esto es la home</h1>, id: "Home" },
            {
                path: "contacto",
                element: <h1>Esto es el contacto</h1>,
                id: "Contact",
            },
            {
                path: "usuarios",
                element: <Users />,
                id: "Users",
                children: [
                    { path: "detalles", element: <p>Detalles de usuarios</p> },
                    { path: "config", element: <p>Configuración</p> },
                ],
            },
            { path: "usuarios/info", element: <h1>Info de usuarios</h1> },
        ],
    },
]

export const routesNav = routes[0].children?.map((route) => ({
    id: route.id,
    path: route.path,
}))!

export default routes
