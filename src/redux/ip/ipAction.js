//set Global Mode
const setIp = (ip) =>{
    return{
        type: "SET_IP",
        payload: ip
    }
};

export default setIp;