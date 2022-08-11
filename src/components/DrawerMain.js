import { Divider, Drawer, Toolbar } from '@mui/material';
import React from 'react'
import DrawerListing from './DrawerListing';
import SearchMain from './SearchMain';
import SystemInfoBox from './SystemInfoBox';

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
            </Drawer>
        </div>
    )
}

export default DrawerMain;