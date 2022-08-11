import React from 'react'
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const SystemInfoBox = () => {
    return (
        <Box
            sx={{
                p: 1.1, m: 2,
                boxShadow: '0 0 1px grey inset',
                borderRadius: 1,
                backgroundColor: '#313131',
                display: 'flex', alignItems: 'center', justifyContent: 'space-around'
            }}
        >
            <Typography variant='h6' textAlign="center" >192.168.59.102</Typography>
            <Tooltip title="Connect" >
                <IconButton>
                    <CompareArrowsIcon />
                </IconButton>
            </Tooltip>
        </Box>
    )
};

export default SystemInfoBox;