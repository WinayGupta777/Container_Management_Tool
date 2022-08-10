import React, { useState } from 'react'
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows"
import { ReactComponent as Termi } from "../assets/TerminalIcon.svg";

const DrawerListing = () => {

    const [open1, setOpen1] = useState(false);

    const handleClick = (num) => {
        if (num === "1") setOpen1(!open1);
    }

    return (
        <div>
            <Box>
                <List>
                    {/* System */}
                    <ListItemButton onClick={() => handleClick('1')}>
                        <ListItemIcon>
                            <DesktopWindowsIcon />
                        </ListItemIcon>
                        <ListItemText primary="System" />
                        <ArrowDropDown />
                    </ListItemButton>
                    <SystemCollapse isOn={open1} />

            
                </List>
            </Box>
        </div>
    )
};

export default DrawerListing;


const SystemCollapse = (props) => {
    return (
        <Collapse in={props.isOn} timeout="auto" unmountOnExit>
            <ListItemButton sx={{ pl: 5 }}>
                <ListItemIcon>
                    <SvgIcon component={Termi} inheritViewBox></SvgIcon>
                </ListItemIcon>
                <ListItemText primary="Terminal" />
            </ListItemButton>
        </Collapse>
    );
};