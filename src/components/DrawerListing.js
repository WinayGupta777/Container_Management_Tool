import React from 'react'
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows"
import { ReactComponent as Termi } from "../assets/TerminalIcon.svg";
const DrawerListing = () => {
    return (
        <div>
            <Box>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            {/* System */}
                            <DesktopWindowsIcon />
                        </ListItemIcon>
                        <ListItemText primary="System" />
                        <ArrowDropDown />
                    </ListItemButton>
                    <Collapse in={true} timeout="auto" unmountOnExit>
                        <ListItemButton sx={{ pl: 5 }}>
                            <ListItemIcon>
                                <SvgIcon component={Termi} inheritViewBox></SvgIcon>
                            </ListItemIcon>
                            <ListItemText primary="Terminal" />
                        </ListItemButton>
                    </Collapse>
                </List>
            </Box>
        </div>
    )
}

export default DrawerListing;