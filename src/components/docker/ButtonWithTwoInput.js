import React, { useState } from 'react';
import { Button, Popover, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setDockerGUIOutput } from "../../redux/groundOutput/groundAction";

const ButtonWithTwoInput = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [contName, setContName] = useState("");
    const [imageName, setImageName] = useState("");
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

    const onChangeMethod = (e, labelId) => {

        if (labelId === "lbl1") {
            setContName(e.target.value);
            console.log(contName);
        } else if (labelId === "lbl2") {
            setImageName(e.target.value);
            console.log(imageName);
        }
    }

    const sendRequest = async () => {
        console.log("Sending Request -->");
        await axios.post(`http://${globeIp}:5000/podcli`, {
            cmd: `podman run -dit --name ${contName} ${imageName}`
        })
            .then((r) => {
                // console.log("OP" + r.data);
                dispatch(setDockerGUIOutput(r.data));
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
                PaperProps={{ style: { width: '17vw', padding: "15px" } }}
            >
                <TextField
                    autoComplete="off"
                    label={props.label1}
                    size="small"
                    onChange={(e) => onChangeMethod(e, "lbl1")}
                    sx={{ mt: 1, mb: 1 }}
                />
                <TextField
                    autoComplete="off"
                    label={props.label2}
                    size="small"
                    onChange={(e) => onChangeMethod(e, "lbl2")}
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

export default ButtonWithTwoInput;