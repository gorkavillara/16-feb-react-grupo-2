const callbackFactorialFunction = (numero: number, resolve: () => any, reject: () => any) => {
    if (numero < 1) {
        reject()
    }
    resolve()
}

describe("Mock testing", () => {
    it("Mi primer mock", () => {
        const miMock = jest.fn()
        miMock()
        expect(miMock).toBeCalledTimes(1)
    })
    it("Funcionando con mocks", () => {
        const miMock = jest.fn()
        callbackFactorialFunction(10, () => console.log("Correcto"), miMock)
        expect(miMock).not.toBeCalled()
        expect(miMock).toBeCalledTimes(0)
    })
    it("Funcionando con mocks satisfactoriamente", () => {
        const miMock = jest.fn()
        callbackFactorialFunction(-10, () => console.log("Correcto"), miMock)
        expect(miMock).toBeCalled()
        expect(miMock).toBeCalledTimes(1)
    })
})

export {}