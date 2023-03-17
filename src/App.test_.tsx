import App from "App"
import { factorial, incrementaVal, suma } from "utils/functions"

test("Mi primer test", () => {
    // Aquí lanzamos nuestras comprobaciones
    expect(2 + 3).toBe(5)
})

describe("Testeando la función suma", () => {
    test("La suma de números con decimales funciona", () => {
        expect(suma(1.1, 4.4)).toBe(5.5)
    })
    test("La suma de números enteros funciona", () => {
        expect(suma(1, 64)).toBe(65)
    })
})

describe("Testeando objetos", () => {
    it("La igualación de un objeto es exactamente el otro", () => {
        const coche = { marca: "Renault", modelo: "Twingo" }
        const copiaCoche = coche

        expect(copiaCoche).toBe(coche) // Dirección en memoria
    })
    test("La copia de un objeto no es exactamente el otro", () => {
        const coche = { marca: "Renault", modelo: "Twingo" }
        const copiaCoche = { ...coche }

        expect(copiaCoche).not.toBe(coche)
        expect(copiaCoche).toEqual(coche) // Contenido
    })
})

describe("Testing strings", () => {
    it("contains a value", () => {
        const miString = "Hello world"
        expect(miString).toContain("world")
    })
})

describe("Testing arrays", () => {
    xit("array contains a value", () => {
        const miArr = [1, 2, 3, 4, 5, true, "Hello world"]
        expect(miArr).toContain(4) // Dirección de memoria
    })
    it("array contains an object", () => {
        const miArr = [
            1,
            2,
            3,
            4,
            5,
            true,
            "Hello world",
            { id: 1, name: "Emily" }
        ]
        expect(miArr).toContainEqual({ id: 1, name: "Emily" }) // Contenido
    })
})

describe("Testing factorial", () => {
    it("works correctly", () => {
        expect(factorial(5)).toBe(120)
    })

    it("throws an error", () => {
        // expect(function () {
        //     factorial(-1)
        // }).toThrow()

        expect(() => factorial(-1)).toThrow(
            new EvalError("El número debe ser mayor que 0")
        )
    })
})

describe("Seteando los tests", () => {
    const miObjeto: any = {}
    beforeAll(() => {
        miObjeto.val = 10
    })
    // beforeEach(() => {
    //     miObjeto.val = 10
    // })
    afterEach(() => {
        miObjeto.val = 10
    })
    afterAll(() => {
        console.log("Ya he terminado, dame más tests")
    })

    it("mi objeto tiene el valor inicial", () => {
        expect(miObjeto.val).toBe(10)
        incrementaVal(miObjeto)
        expect(miObjeto.val).toBe(11)
    })

    it("mi objeto varía con el tiempo", () => {
        expect(miObjeto.val).toBe(10)
        incrementaVal(miObjeto)
        incrementaVal(miObjeto)
        expect(miObjeto.val).toBe(12)
    })
})