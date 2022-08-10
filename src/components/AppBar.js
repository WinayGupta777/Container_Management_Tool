import React, { useState } from 'react'
import { AppBar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';


const AppBarComp = () => {
    const [globalThemeMode, setGlobalThemeMode] = useState(false);

    const changeTheme=()=>{
        setGlobalThemeMode(!globalThemeMode);
    }
    return (
        <div>
            <AppBar
                position='fixed'
                className='appBar'
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <Typography variant="h4" component="div" noWrap sx={{ flexGrow: 1 }}>Conatiner Management Tool</Typography>
                    <Tooltip title="Source code">
                        <IconButton size='large' color='inherit' sx={{ mr: 2 }}>
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Change theme">
                        <IconButton size='large' color='inherit' sx={{ mr: 2 }} onClick={()=>changeTheme()}>
                            { globalThemeMode ? 
                            <BrightnessHighIcon />
                            : <BrightnessLowIcon />}
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppBarComp;