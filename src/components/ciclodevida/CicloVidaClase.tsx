import React, { Component } from "react"

export default class CicloVidaClase extends Component<{}, { status: boolean }> {
    state = {
        status: true
    }
    componentDidMount(): void {
        console.log("El componente se acaba de montar")
        // Lanzar diferentes llamadas a apis
    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ status: boolean }>, nextContext: any): boolean {
        if (this.state.status === nextState.status) return false
        return true
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ status: boolean }>, snapshot?: any): void {
        console.log("El componente se ha actualizado")
    }

    cambiaEstado = () => {
        this.setState({ status: !this.state.status })
        // this.setState((prevState: Readonly<{ status: boolean }>) => {})
    }

    componentWillUnmount(): void {
        console.log("El componente se va a desmontar")
    }

    render() {
        return <div>
            <h1>Componente clase</h1>
            <button onClick={this.cambiaEstado}>Actualiza</button>
        </div>
    }
}
