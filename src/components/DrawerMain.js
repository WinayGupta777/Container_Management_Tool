import React from 'react'
import { Box, Divider, Drawer, Toolbar } from '@mui/material';
import ContributersMain from './ContributersMain';
import DrawerListing from './DrawerListing';
// import SearchMain from './SearchMain';
import SystemInfoBox from './SystemInfoBox';
import { Outlet } from 'react-router-dom';
// import Terminal from './system/Terminal';
// import DockerCLI from "./docker/DockerCLI";
import DockerGUI from './docker/DockerGUI';

const DrawerMain = () => {
    return (
        <div>
            <Drawer
                anchor="left" variant="permanent" elevation={20}
                sx={{
                    opacity: 1,
                    width: 300,
                    flexShrink: 0,
                    boxSizing: 'border-box',
                    '& .MuiDrawer-paper': {
                        width: 330,
                    },
                }}
            >
                <Toolbar sx={{ height: "3rem" }} />
                <SystemInfoBox />
                {/* <Divider /> */}
                {/* <SearchMain /> */}
                <DrawerListing />
                <Toolbar sx={{ flexGrow: 1 }} />
                <Divider />
                <ContributersMain />
            </Drawer>

            <Box>
                <Outlet />
            </Box>
        </div>
    )
}

export default DrawerMain;