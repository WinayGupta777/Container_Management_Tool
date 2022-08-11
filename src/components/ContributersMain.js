import React from 'react'
import { Avatar, Box, AvatarGroup, Tooltip } from '@mui/material';
import f1 from "../static/Images/f1.jpg";
import m1 from "../static/Images/m1.jpg";
import m2 from "../static/Images/m2.jpg";
import m3 from "../static/Images/m3.jpg";

const ContributersMain = () => {
    return (
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            <AvatarGroup max={4} >
                <Tooltip title="Dolly">
                    <Avatar src={f1} sx={{ width: 55, height: 55 }} />
                </Tooltip>
                <Tooltip title="Trevor Henderson">
                    <Avatar src={m3} sx={{ width: 55, height: 55 }} />
                </Tooltip>
                <Tooltip title="Agnes Walker">
                    <Avatar src={m2} sx={{ width: 55, height: 55 }} />
                </Tooltip>
                <Tooltip title="Travis Howard">
                    <Avatar src={m1} sx={{ width: 55, height: 55 }} />
                </Tooltip>
            </AvatarGroup>
        </Box>
    )
}

export default ContributersMain;