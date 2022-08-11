import { Box, Button } from '@mui/material';
import React from 'react'

const DockerGUIHeader = () => {
    return (
        <Box
            sx={{
                padding: 3,
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'black' : 'white'
            }}
        >
            <Button
                variant='contained'
                sx={{ 
                    backgroundColor: (theme)=>theme.palette.mode === 'dark' ? '#e8e8e8' : '#212121', 
                    '&:hover': { 
                        backgroundColor: (theme)=>theme.palette.mode === 'dark' ? '#9c9c9c' : '#5e5e5e',  
                    } 
                }}
            >List all</Button>
        </Box>
    )
}

export default DockerGUIHeader;