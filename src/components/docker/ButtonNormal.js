import { Button } from '@mui/material';
import React from 'react'

const ButtonNormal = (props) => {
    return (
        <Button
            variant='contained'
            //onClick={sendRequest}
            disableElevation
            sx={{
                justifySelf: 'center',
                alignSelf: 'center',
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#e8e8e8' : '#212121',
                '&:hover': {
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#9c9c9c' : '#5e5e5e',
                }
            }}
        >
            {props.text}
        </Button>

    )
};

export default ButtonNormal;