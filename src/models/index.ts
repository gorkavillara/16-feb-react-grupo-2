interface Sprites {
    front_default: string
    back_default: string
}

export interface Pokemon {
    id: number
    name: string
    sprites: Sprites
}