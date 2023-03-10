import { ActionType, ContadorState } from "models";

const contadorReducer = (
    state: ContadorState,
    action: { payload?: any; type: ActionType }
) => {
    switch (action.type) {
        case "INCREMENTA":
            return { valor: state.valor + 1 }
        case "DECREMENTA":
            return { valor: state.valor - 1 }
    }
}

export default contadorReducer