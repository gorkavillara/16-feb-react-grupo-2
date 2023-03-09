/* eslint-disable */
import ContadorContextProvider from "contexts/ContadorContextProvider"
import TareasContextProvider from "contexts/TareasContextProvider"
import Contador from "views/Contador"
import ListaTareas from "views/ListaTareas"
import "./App.css"

function App() {
    return (
        <div className="App">
            <ContadorContextProvider>
                <Contador />
                <TareasContextProvider>
                    <ListaTareas />
                </TareasContextProvider>
            </ContadorContextProvider>
        </div>
    )
}

export default App
