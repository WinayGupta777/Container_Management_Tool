
const initialState = {
    output: "Command Output"
}

const groundReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "SET_OUTPUT": return {
            ...state,
            output: action.payload
        }
        default: return state
    }
}

export default groundReducer;