import Contador from "components/Contador"
import Usuarios from "components/Usuarios/Usuarios"

function App() {
    return (
        <div className="App">
            <Contador valorInicial={3} />
            <Usuarios />
        </div>
    )
}

export default App
