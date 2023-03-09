import axios from "axios"

export const pokeInfo = axios.create({ baseURL: "https://pokeapi.co/api/v2/pokemon" })

export const clientInfo = axios.create({ baseURL: "https://misclientes.com", method: "POST", headers: {} })
