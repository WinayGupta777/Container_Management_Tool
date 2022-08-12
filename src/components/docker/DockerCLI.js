import React from 'react'
import { Code } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import CommandPrompt from '../CommandPrompt';
import OutputGround from '../OutputGround';

const DockerCLI = () => {
    return (
        <Box
            sx={{ ml: "330px", pt: "63px", height: "calc(100vh - 63px)" }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', ml: 5, p: 2 }}>
                <Typography variant='h4' >Docker CLI</Typography>
                <Code color="white" sx={{ pl: 2 }} />
            </Box>
            <Divider />

            <Box
                sx={{ pl: 5, pr: 5, mt: 4 }}
            >
                <CommandPrompt />
                <Divider sx={{ mt: 4, mb: 4 }} />
                <OutputGround plateform="dockercli" />
            </Box>
        </Box>
    )
}

export default DockerCLI;