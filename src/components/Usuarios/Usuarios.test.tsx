import { render, screen } from "@testing-library/react"
import axios from "axios"
import Usuarios, { IUser } from "./Usuarios"

const myMockedUsers: IUser[] = [
    { id: 1, username: "hola", email: "hola@mundo.org", password: "123456" }
]

describe("Testeando usuarios", () => {
    it("Renderiza", () => {
        render(<Usuarios />)
    })
    it("Obtenemos el texto antes de obtener los usuarios", () => {
        render(<Usuarios />)
        screen.getByText("Todavía no hay usuarios")
    })
    // it("Obtiene de forma natural los usuarios", async () => {
    //     render(<Usuarios />)
    //     const primerUsuario = "primero - prueba@gmail.com"
    //     await screen.findByText(primerUsuario)
    // })
    it("Simulamos una llamada", async () => {
        const mockedAxios = jest.spyOn(axios, "post")
        mockedAxios.mockResolvedValue({
            data: {
                users: myMockedUsers
            }
        })

        render(<Usuarios />)
        await screen.findByText("hola - hola@mundo.org")
    })

    afterAll(() => {
        jest.resetAllMocks()
    })
})
