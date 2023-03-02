import React, { useState } from "react"
import { Button } from "components/buttons"

const Users = () => {
    const [color, setColor] = useState("green")
    // const [big, setBig] = useState(true)

    const setRandomColor = () => {
        const taint = 360 * Math.random()
        setColor(`hsl(${taint}, 100%, 50%)`)
    }

    const big = false

    return (
        <div>
            <h1 style={{ fontSize: big ? "4rem" : "1rem", color }}>Users</h1>
            <Button onClick={setRandomColor} />
        </div>
    )
}

export default Users
