import React, { useMemo } from "react"

const calculoMuyGrande = (valInicial: number) => {
    for (let i = 0; i < 1000000000; i++) {
        let a = i
    }
    return valInicial
}

const ContadorVistaUseMemo = ({ contador }: { contador: number }) => {
    const valorContador = useMemo(() => calculoMuyGrande(contador), [contador])

    console.log(valorContador)
    return <div>Valor: {valorContador}</div>
}

export default ContadorVistaUseMemo
