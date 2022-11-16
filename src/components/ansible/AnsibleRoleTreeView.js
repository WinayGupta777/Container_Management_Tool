import React, { useState } from 'react';
import { Box, Collapse, Divider, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AnsibleRoleTreeView = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Box
            sx={{
                height: expanded ? 320 : 40, width: 265, minHeight: 40, p: '20px',
                backgroundColor: '#313131', borderRadius: 5, transition: '0.2s ease'
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: 21 }} >Tree View</Typography>
                <IconButton onClick={handleExpandClick} >
                    <ExpandMoreIcon
                        sx={{
                            transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: '0.2s ease'
                        }}
                    />
                </IconButton>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Divider />
                <ViewGround />
            </Collapse>
        </Box>
    )
}

export default AnsibleRoleTreeView;

const ViewGround = () => {
    const value = `
├───components
│   ├───ansible
│   ├───docker
│   ├───pam-auth
│   └───system
├───css
├───redux
│   ├───groundOutput
│   ├───ip
│   └───themeMode
└───static
    ├───Icons
    └───Images`;
    return (
        <Box
            component="pre"
            sx={{ fontSize: 21, height: 290, overflow: 'scroll' }}
        >
            {value}
        </Box>
    )
}