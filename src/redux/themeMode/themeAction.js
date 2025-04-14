//set Global Mode
const setTheme = (themeValue) =>{
    return{
        type: "SET_MODE",
        payload: themeValue
    }
};

export default setTheme;