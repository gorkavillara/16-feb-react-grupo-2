/* eslint-disable */

import ContadorVistaUseMemo from "components/ContadorVistaUseMemo"
import ContadorVistaUseCallback from "components/ContadorVistaUseCallback"
import { useState } from "react"

function App() {
    const [contador, setContador] = useState(0)
    const [toggle, setToggle] = useState(false)

    const incrementaContador = () => {
        setContador((prev) => prev + 1)
    }
    return (
        <div className="App">
            <ContadorVistaUseCallback contador={contador} />
            <button onClick={incrementaContador}>Más</button>
            <input
                type="checkbox"
                checked={toggle}
                onClick={() => setToggle((prev) => !prev)}
            />
        </div>
    )
}

export default App
