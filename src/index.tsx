import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import routes from "routes"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const router = createBrowserRouter(routes)

root.render(
    // <React.StrictMode>
    // <App />
    <RouterProvider router={router} />
    // </React.StrictMode>
)
