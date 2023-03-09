import React, { useState } from "react"
import axios from "axios"
import { Pokemon } from "models"
import PikaLoader from "components/PikaLoader"
import { pokeInfo } from "httpClients"

const PokeView = () => {
    const [pokeId, setPokeId] = useState<undefined | number>()
    const [pokemon, setPokemon] = useState<undefined | Pokemon>()
    const [loading, setLoading] = useState<boolean>(false)

    const fetchPokemon = async () => {
        if (!pokeId) return

        setLoading(true)
        const baseUrl = "https://pokeapi.co/api/v2/pokemon"
        // hacer una llamada a una api
        const url = `${baseUrl}/${pokeId}`
        console.log(url)

        // fetch(url)
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        //     .catch(error => console.error(error))
        //     .finally(() => console.log("He terminado"))

        // try {
        //     const jsonRes = await fetch(url)
        //     const data = await jsonRes.json()
        //     console.log(data)
        // } catch(error) {
        //     // la lógica del error
        // }

        // const { data: pokemon } = await axios.get<Pokemon>(url)
        const { data: pokemon } = await pokeInfo(`/${pokeId}`)
        console.log(pokemon)
        setPokemon(pokemon)
        setLoading(false)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>PokeView</h1>
            <input
                value={pokeId?.toString()}
                onChange={(e) => setPokeId(Number(e.target.value))}
                type="number"
                // min={1}
                max={151}
                placeholder="Introduce el id del pokemon"
            />
            <button onClick={fetchPokemon}>Buscar</button>
            {loading && <PikaLoader />}
            {pokemon && !loading && (
                <div>
                    <h4>{pokemon.name}, Id: {pokemon.id}</h4>
                    <img src={pokemon.sprites.front_default} alt="" />
                </div>
            )}
        </div>
    )
}

export default PokeView
