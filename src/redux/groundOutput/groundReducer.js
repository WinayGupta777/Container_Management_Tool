
const initialState = {
    s_cli_output: "System Terminal",
    d_cli_output: "Docker CLI",
    d_gui_output: "Docker GUI",
}

const groundReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "SET_D_GUI_OUTPUT": return {
            ...state,
            d_gui_output: action.payload
        }
        case "SET_D_CLI_OUTPUT": return {
            ...state,
            d_cli_output: action.payload
        }
        case "SET_S_CLI_OUTPUT": return {
            ...state,
            s_cli_output: action.payload
        }
        default: return state
    }
}

export default groundReducer;