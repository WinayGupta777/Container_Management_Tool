//set output in ground
export const setDockerGUIOutput = (op) =>{
    return{
        type: "SET_D_GUI_OUTPUT",
        payload: op
    }
};


export const setSystemCLIOutput = (op) =>{
    return{
        type: "SET_S_CLI_OUTPUT",
        payload: op
    }
};


export const setDockerCLIOutput = (op) =>{
    return{
        type: "SET_D_CLI_OUTPUT",
        payload: op
    }
};

//export {setDockerGUIOutput ,setSystemCLIOutput, setDockerCLIOutput};