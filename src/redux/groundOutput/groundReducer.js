
const initialState = {
    s_cli_output: "System Terminal  :: Command Output will display here",
    d_cli_output: "Docker CLI  :: Command Output will display here",
    d_gui_output: "Docker GUI  :: Command Output will display here",
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