import { createSlice } from "@reduxjs/toolkit"

const contadorSlice = createSlice({
    name: "contador",
    initialState: { valor: 5 },
    reducers: {
        incrementa: (state, action) => {
            console.log(action.type)
            console.log(action.payload)
            return { valor: state.valor + 1 }
        },
        decrementa: (state, action) => {
            return { valor: state.valor - 1 }
        },
        reset: (state, action) => {
            return { valor: 0 }
        }
    }
})

export const { incrementa, decrementa, reset } = contadorSlice.actions

export default contadorSlice.reducer
