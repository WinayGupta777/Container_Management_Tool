
const initialState = {
    ip: "Connect to host"
}

const ipReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "SET_IP": return {
            ...state,
            ip: action.payload
        }
        default: return state
    }
}

export default ipReducer;