import React from 'react'
import { Box, Divider, SvgIcon, Typography } from '@mui/material';
import DockerGUIHeader from './DockerGUIHeader';
import OutputGround from "../OutputGround";
import { ReactComponent as GuiClick } from "../../static/Icons/GuiClick.svg";
const DockerGUI = () => {
    return (
        <Box
            sx={{ ml: "330px", pt: "63px", height: "calc(100vh - 63px)" }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', ml: 5, p: 2 }}>
                <Typography variant='h4' >Docker GUI</Typography>
                <SvgIcon component={GuiClick} inheritViewBox sx={{ pl:2 }}></SvgIcon>
            </Box>
            <Divider />

            <Box
                sx={{ pl: 5, pr: 5, mt: 4 }}
            >
                <DockerGUIHeader />
                <Divider sx={{ mt: 4, mb: 4 }} />
                <OutputGround  plateform="dockergui" />
            </Box>
        </Box>
    )
}

export default DockerGUI;