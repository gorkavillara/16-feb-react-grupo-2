import React from "react"

const calculoMuyGrande = (valInicial: number) => {
    for (let i = 0; i < 1000000000; i++) {
        let a = i
    }
    return valInicial
}

const ContadorVista = React.memo(({ contador }: { contador: number }) => {
    const valorContador = calculoMuyGrande(contador)
    return <div>Valor: {valorContador}</div>
})

export default ContadorVista
