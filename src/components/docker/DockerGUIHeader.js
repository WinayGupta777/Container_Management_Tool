import { Box } from '@mui/material';
import React from 'react'
import ButtonNormal from './ButtonNormal';

const DockerGUIHeader = () => {
    return (
        <Box
            sx={{
                p: 3, display: 'grid', gridRowGap: 15,
                gridAutoFlow: 'column dense',
                gridTemplateRows: 'repeat(3, 45px [row-start])',
                gridTemplateColumns: 'repeat(5, 250px [col-start])',
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#121212' : '#f1f1f1'
            }}
        >
            <ButtonNormal text="List all containers" cmd="podman ps -a" />
            <ButtonNormal text="List running containers" cmd="podman ps" />
            <ButtonNormal text="List images" cmd="podman images" />
            <ButtonNormal text="List networks" cmd="podman network ls" />
            <ButtonNormal text="Show container logs" cmd="podman log" />
        </Box>
    )
}

export default DockerGUIHeader;