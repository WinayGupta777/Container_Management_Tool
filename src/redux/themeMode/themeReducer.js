
const initialState = {
    //default theme = light
    theme: false
}

const themeReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "SET_MODE": return {
            ...state,
            theme: action.payload
        }
        default: return state
    }
}

export default themeReducer;