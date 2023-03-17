import App from "App";
import { suma } from "utils/functions";

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
    test("La igualación de un objeto es exactamente el otro", () => {
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