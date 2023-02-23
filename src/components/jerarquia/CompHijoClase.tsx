import React, { Component } from "react"

interface ElTipoDeLasProps {
    mensaje?: string
}

export default class CompHijoClase extends Component<ElTipoDeLasProps> {
    render() {
        const { mensaje } = this.props
        // console.log(this.props)
        return <div>{mensaje}</div>
    }
}
