//set output in ground
const setOutput = (op) =>{
    return{
        type: "SET_OUTPUT",
        payload: op
    }
};

export default setOutput;