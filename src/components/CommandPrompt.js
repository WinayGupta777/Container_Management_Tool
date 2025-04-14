import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setDockerCLIOutput, setSystemCLIOutput } from '../redux/groundOutput/groundAction';


const CommandPrompt = (props) => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const globeIp = useSelector((state)=>state.ipReducer.ip);


    const onChangeMethod = (e) => {
        setValue(e.target.value);
    }

    const sendRequest = async (e) => {
        e.preventDefault();
        await axios.post(`http://${globeIp}:5000/podcli`, {
            cmd: value
        })
        .then((r)=>{
            //console.log(r.data);
            if(props.for === "syscli") {
                dispatch(setSystemCLIOutput(r.data));
            } else if(props.for === "doccli") {
                dispatch(setDockerCLIOutput(r.data));
            }
        }).catch((err)=>{
            console.log(err)
            if(props.for === "syscli") {
                dispatch(setSystemCLIOutput(err.message));
            } else if(props.for === "doccli") {
                dispatch(setDockerCLIOutput(err.message));
            }
        })
    }

    return (
        <Box
            component="form"
            autoComplete="off"
            className="boxform"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
            }}
            onSubmit={(e)=>sendRequest(e)}
        >
            <Typography variant="h4" sx={{ mr: 2 }}>#</Typography>
            <TextField
                sx={{
                    width: "60%",
                    '& input': { fontSize: 26, fontFamily: 'consolas' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: (theme) => theme.palette.mode === 'dark' ? 'white' : 'black',
                        }
                    }
                }}
                size="small"
                variant="outlined"
                onChange={(e) => onChangeMethod(e)}
            />
            <Button
                variant="contained"
                size='large'
                type='submit'
                disableElevation
                endIcon={<Send />}
                sx={{ ml: 2, fontSize: 20 }}
            >Run</Button>
        </Box>
    )
}

export default CommandPrompt;