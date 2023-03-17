export const suma = (a: number, b: number) => a + b

export const factorial = (a: number) => {
    if (a < 1) {
        throw new SyntaxError("El número debe ser mayor que 0")
    }
    let fact = a;
    for (let i = a - 1; i > 1; i--) {
        fact *= i
    }
    return fact
}

export const incrementaVal = (objeto: { val: number }): void => {
    objeto.val = objeto.val + 1
}