import { Box } from '@mui/material';
import React from 'react'
import ButtonNormal from './ButtonNormal';
import ButtonWithSingleInput from './ButtonWithSingleInput';

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
            <ButtonNormal text="List stopped containers" cmd="echo ... " />
            <ButtonNormal text="List images" cmd="podman images" />
            <ButtonNormal text="List networks" cmd="podman network ls" />
            <ButtonWithSingleInput text="Show container log" label="Container id/name" cmd="podman logs " />
            <ButtonWithSingleInput text="Pull docker image" label="Image name" cmd="podman pull " />
            <ButtonWithSingleInput text="Remove image" label="Image name" cmd="podman rmi " />
            <ButtonWithSingleInput text="Search image on hub" label="Keywords" cmd="podman search " />
            <ButtonWithSingleInput text="Show image history" label="Image name" cmd="podman history " />
            <ButtonWithSingleInput text="Start container" label="Container id/name" cmd="podman start " />
            <ButtonWithSingleInput text="Stop container" label="Container id/name" cmd="podman stop " />
            <ButtonWithSingleInput text="Run container" label="Image name" cmd="podman stop " />
        </Box>
    )
}

export default DockerGUIHeader;