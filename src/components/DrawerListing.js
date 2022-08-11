import React, { useState } from 'react'
import { Box, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';
import { ArrowDropDown, OndemandVideo, FileCopy } from '@mui/icons-material';
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows"
import { ReactComponent as Termi } from "../assets/TerminalIcon.svg";
import { ReactComponent as PodC } from "../assets/docker1.svg";
import { ReactComponent as GuiClick } from "../assets/GuiClick.svg";
import { ReactComponent as K8s } from "../assets/k8s.svg";


const DrawerListing = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const handleClick = (num) => {
        if (num === "1") setOpen1(!open1);
        if (num === "2") setOpen2(!open2);
        if (num === "3") setOpen3(!open3);
    }

    return (
        <div>
            <Box>
                <List>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    {/* System */}
                    <ListItemButton onClick={() => handleClick('1')}>
                        <ListItemIcon>
                            <DesktopWindowsIcon />
                        </ListItemIcon>
                        <ListItemText primary="System" />
                        <ArrowDropDown />
                    </ListItemButton>
                    <SystemCollapse isOn={open1} />

                    <Divider sx={{ backgroundColor: 'gray' }} />

                    {/* Docker */}
                    <ListItemButton onClick={() => handleClick('2')}>
                        <ListItemIcon>
                            <SvgIcon component={PodC} inheritViewBox></SvgIcon>
                        </ListItemIcon>
                        <ListItemText primary="Docker" />
                        <ArrowDropDown />
                    </ListItemButton>
                    <DockerCollapse isOn={open2} />

                    <Divider sx={{ backgroundColor: 'gray' }} />

                    {/* Docker */}
                    <ListItemButton onClick={() => handleClick('3')}>
                        <ListItemIcon>
                            <SvgIcon component={K8s} inheritViewBox></SvgIcon>
                        </ListItemIcon>
                        <ListItemText primary="Kubernetes" />
                        <ArrowDropDown />
                    </ListItemButton>
                    <KubernetesCollapse isOn={open3} />
                </List>
            </Box>
        </div>
    )
};

export default DrawerListing;


const SystemCollapse = (props) => {
    return (
        <>
            <Collapse in={props.isOn} timeout="auto" unmountOnExit>
                <Divider sx={{ marginLeft: 5 }} />
                <ListItemButton sx={{ pl: 5 }}>
                    <ListItemIcon>
                        <SvgIcon component={Termi} inheritViewBox></SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="Terminal" />
                </ListItemButton>
            </Collapse>
        </>
    );
};

const DockerCollapse = (props) => {
    return (
        <>
            <Collapse in={props.isOn} timeout="auto" unmountOnExit>
                <Divider sx={{ marginLeft: 5 }} />
                <ListItemButton sx={{ pl: 5 }}>
                    <ListItemIcon>
                        <SvgIcon component={Termi} inheritViewBox></SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="Docker CLI" />
                </ListItemButton>
                <Divider sx={{ marginLeft: 5 }} />

                <ListItemButton sx={{ pl: 5 }}>
                    <ListItemIcon>
                        <SvgIcon component={GuiClick} inheritViewBox></SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="Docker GUI" />
                </ListItemButton>
                <Divider sx={{ marginLeft: 5 }} />

                <ListItemButton sx={{ pl: 5 }}>
                    <ListItemIcon>
                        <OndemandVideo />
                    </ListItemIcon>
                    <ListItemText primary="Docker tutorials" />
                </ListItemButton>
                <Divider sx={{ marginLeft: 5 }} />

                <ListItemButton sx={{ pl: 5 }}>
                    <ListItemIcon>
                        <FileCopy />
                    </ListItemIcon>
                    <ListItemText primary="Docker docs" />
                </ListItemButton>
            </Collapse>
        </>
    );
};

const KubernetesCollapse = (props) => {
    return (
        <>
            <Collapse in={props.isOn} timeout="auto" unmountOnExit>
                <Divider sx={{ marginLeft: 5 }} />
                <ListItemButton sx={{ pl: 5 }}>
                    <ListItemIcon>
                        <SvgIcon component={Termi} inheritViewBox></SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="Kubernetes CLI" />
                </ListItemButton>
                <Divider sx={{ marginLeft: 5 }} />
                <ListItemButton sx={{ pl: 5 }}>
                    <ListItemIcon>
                        <SvgIcon component={GuiClick} inheritViewBox></SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="Kubernetes GUI" />
                </ListItemButton>
                <Divider sx={{ marginLeft: 5 }} />
                <ListItemButton sx={{ pl: 5 }}>
                    <ListItemIcon>
                        <FileCopy />
                    </ListItemIcon>
                    <ListItemText primary="Kubernetes docs" />
                </ListItemButton>
            </Collapse>
        </>
    );
};
