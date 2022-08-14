import React, { useState } from 'react';
import { Button, Popover, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setDockerGUIOutput } from "../../redux/groundOutput/groundAction";

const ButtonWithSingleInput = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState("");
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    const dispatch = useDispatch();
    const globeIp = useSelector(
        (state) => state.ipReducer.ip
    );


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log("Button: ", `${props.text}`);
    }
    const handleClose = () => { setAnchorEl(null); }

    const onChangeMethod = (e) => {
        setValue(props.cmd + e.target.value);
        console.log(value);
    }

    const sendRequest = async () => {
        console.log("Sending Request -->");
        await axios.post(`http://${globeIp}:5000/podcli`, {
            cmd: value
        })
            .then((r) => {
                // console.log(typeof(r.data))
                if(typeof(r.data)==="object"){
                    dispatch(setDockerGUIOutput(JSON.stringify(r.data, null, 2)));
                } else {
                    dispatch(setDockerGUIOutput(r.data));
                }
            })
            .catch((err) => {
                // console.log("ERROR"  + err.message);
                dispatch(setDockerGUIOutput(err.message));
            });
        setAnchorEl(null);
    }
    return (
        <>
            <Button
                variant='contained'
                onClick={handleClick}
                aria-describedby={id}
                disableElevation
                sx={{
                    justifySelf: 'center',
                    alignSelf: 'center',
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#e8e8e8' : '#212121',
                    '&:hover': {
                        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#9c9c9c' : '#5e5e5e',
                    }
                }}
            >
                {props.text}
            </Button>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                PaperProps={{ style: { width: '17vw', padding: "20px" } }}
            >
                <TextField
                    autoComplete="off"
                    label={props.label}
                    size="small"
                    onChange={(e) => onChangeMethod(e)}
                    sx={{ mt: 1, mb: 1 }}
                />
                <Button
                    disableElevation
                    variant="contained"
                    onClick={sendRequest}
                    sx={{ mt: 1, ml: 1 }}
                >Done</Button>

            </Popover>
        </>
    )
}

export default ButtonWithSingleInput;