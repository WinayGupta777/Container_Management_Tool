import React from 'react'
import { SwapHoriz } from "@mui/icons-material";
import { Box, Button, IconButton, Popover, TextField, Typography, Tooltip } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setIp from "../redux/ip/ipAction";

const SystemInfoBox = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState('');
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const dispatch = useDispatch();
    const globeIp = useSelector(
        (state)=> state.ipReducer.ip
    );

    const handleClick = (event) => { setAnchorEl(event.currentTarget); }
    const handleClose = () => { setAnchorEl(null); }

    const onChangeMethod = (e) => {
        setValue(e.target.value);
    }
    const setIP = async () => {
        await dispatch(setIp(value));
        setAnchorEl(null);
        console.log("Pressed");
    }
    return (
        <Box
            sx={{
                p: 1.1, m: 2,
                boxShadow: '0 0 1px skyblue inset',
                borderRadius: 1,
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#313131' : '#e6ffec',
                display: 'flex', alignItems: 'center', justifyContent: 'space-around'
            }}
        >
            <Typography variant='h6' textAlign="center" >{globeIp}</Typography>
            <Tooltip title="Connect" >
                <IconButton aria-describedby={id} onClick={handleClick}>
                    <SwapHoriz />
                </IconButton>
            </Tooltip>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                PaperProps={{ style: { width: '19vw', padding: "20px" } }}
            >
                <TextField
                    autoComplete="off"
                    label="IP"
                    size="small"
                    onChange={(e) => onChangeMethod(e)}
                    sx={{ mt: 1, mb: 1 }}
                />
                <Button
                    disableElevation
                    variant="contained"
                    onClick={setIP}
                    sx={{ mt: 1, ml: 1 }}
                >Done</Button>



            </Popover>
        </Box>
    )
};

export default SystemInfoBox;