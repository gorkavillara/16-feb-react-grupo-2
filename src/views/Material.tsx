import React, { useState } from "react"
import Switch from "@mui/material/Switch"
import Typography from "@mui/material/Typography"
import Button from "components/Buttons/Button"

const Material = () => {
    const [active, setActive] = useState(true)
    return (
        <div>
            <Typography sx={{ color: "green" }} variant="h4">Material</Typography>
            <Switch
                checked={active}
                onClick={() => setActive((prev) => !prev)}
                color="warning"
            />
            <Button>Hola mundo</Button>
        </div>
    )
}

export default Material
