import React, { useState } from 'react'
import { Box, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';
import { ArrowDropDown, OndemandVideo, FileCopy, CloudQueue } from '@mui/icons-material';
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows"
import { ReactComponent as Termi } from "../static/Icons/TerminalIcon.svg";
import { ReactComponent as PodC } from "../static/Icons/docker1.svg";
import { ReactComponent as GuiClick } from "../static/Icons/GuiClick.svg";
import { ReactComponent as K8s } from "../static/Icons/k8s.svg";


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
                <List sx={{ padding: 0 }}>
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

                    {/* Kubernetes */}
                    <ListItemButton onClick={() => handleClick('3')}>
                        <ListItemIcon>
                            <SvgIcon component={K8s} inheritViewBox></SvgIcon>
                        </ListItemIcon>
                        <ListItemText primary="Kubernetes" />
                        <ArrowDropDown />
                    </ListItemButton>
                    <KubernetesCollapse isOn={open3} />

                    <Divider sx={{ backgroundColor: 'gray' }} />
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

                <Divider sx={{ marginLeft: 5 }} />
                <ListItemButton sx={{ pl: 5 }} >
                    <ListItemIcon>
                        <CloudQueue />
                    </ListItemIcon>
                    <ListItemText primary="Docker Hub" />
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
