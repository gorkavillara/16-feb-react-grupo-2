/* eslint-disable @typescript-eslint/no-unused-vars */

import { render, screen, fireEvent } from "@testing-library/react";
import Contador from "./Contador";

describe("Componente contador", () => {
    it("Renderiza", () => {
        render(<Contador />)
    })
    it("Renderiza el valor inicial por defecto = 0", () => {
        render(<Contador />)
        const element = screen.getByLabelText("text-value")
        screen.getByText("0")
        // console.log(element)
    })
    it("Renderiza el valor inicial por props", () => {
        render(<Contador valorInicial={5} />)
        screen.getByLabelText("text-value")
        screen.getByText("5")
    })
    it("Cuando hacemos clic en el botón, el valor incrementa", () => {
        render(<Contador valorInicial={10} />)
        const button = screen.getByLabelText("increment-button")
        const valueElement = screen.getByLabelText("cont-value")
        expect(valueElement.innerHTML).toBe("10")
        fireEvent.click(button)
        expect(valueElement.innerHTML).toBe("11")
    })
})