import React from 'react'
import { Box, Typography } from '@mui/material';

const ContributersMain = () => {
    return (
        <Box sx={{ p: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }} >
            <Typography sx={{ mb: 2 }}>Developer</Typography>
            <Box
                sx={{
                    display: 'grid', gridColumnGap: 10, mb: 2,
                    // gridAutoFlow: 'column dense',
                    // gridTemplateRows: 'repeat(2, 45px [row-start])',
                    // gridTemplateColumns: 'repeat(2)'
                }}
            >
                <ContributerBox name="Vinay Gupta" />
            </Box>
        </Box>
    )
}

export default ContributersMain;

const ContributerBox = (props) => {
    return (
        <Box sx={{
            justifySelf: 'center', p: 1, alignSelf: 'center',width: 100, backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#272727' : '#e6ffec',
            border: '1px solid none', borderRadius: 1, fontSize: 14, textAlign: 'center',
        }}>{props.name}</Box>
    )
};