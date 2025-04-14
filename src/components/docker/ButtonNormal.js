import React from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {setDockerGUIOutput} from "../../redux/groundOutput/groundAction";

const ButtonNormal = (props) => {
    const dispatch = useDispatch();
    const globeIp = useSelector(
        (state) => state.ipReducer.ip
    );


    const sendRequest = async () => {
        console.log("Sending Request -->");
        await axios.post(`http://${globeIp}:5000/podcli`, {
            cmd: props.cmd
        })
            .then((r) => {
                //console.log("OP" + r.data);
                dispatch(setDockerGUIOutput(r.data));
            })
            .catch((err) => {
                // console.log("Err" + err.message);
                dispatch(setDockerGUIOutput(err.message));
            });
    }
    return (
        <Button
            variant='contained'
            onClick={sendRequest}
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

    )
};

export default ButtonNormal;