import React from "react"
import { Button, InputGroup, InputGroupText, Input } from "reactstrap"

const Bootstrap = () => {
    return (
        <div>
            <h3>Bootstrap</h3>
            <Button color="info" outline>
                Hola mundo
            </Button>
            <InputGroup>
                <InputGroupText>@</InputGroupText>
                <Input placeholder="username" />
            </InputGroup>
        </div>
    )
}

export default Bootstrap
