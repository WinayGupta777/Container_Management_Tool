import { Box, Button } from '@mui/material';
import React from 'react'

const DockerGUIHeader = () => {
    return (
        <Box
            sx={{
                p: 3,
                display: 'grid',
                gridRowGap: 15,
                gridAutoFlow: 'column dense',
                gridTemplateRows: 'repeat(3, 45px [row-start])',
                gridTemplateColumns: 'repeat(5, 250px [col-start])',
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#121212' : '#f1f1f1'
            }}
        >
            <Button
                variant='contained'
                disableElevation
                sx={{
                    justifySelf: 'center',
                    alignSelf: 'center',
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#e8e8e8' : '#212121',
                    '&:hover': {
                        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#9c9c9c' : '#5e5e5e',
                    }
                }}
            >List all  containers</Button>
            
        </Box>
    )
}

export default DockerGUIHeader;