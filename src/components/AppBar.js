import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import setTheme from '../redux/themeMode/themeAction';

const AppBarComp = () => {
    const theme = useSelector(
        (state)=> state.themeReducer.theme
    );
    const dispatch = useDispatch();

    const gotoGitHub=()=>{
        var url = "https://github.com/WinayGupta777/Container_Management_Tool";
        window.open(url, "_blank");
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
                        <IconButton size='large' color='inherit' sx={{ mr: 2 }} onClick={gotoGitHub}>
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Change theme">
                        <IconButton size='large' color='inherit' sx={{ mr: 2 }} onClick={()=>dispatch(setTheme(!theme))}>
                            { theme ? 
                            <BrightnessLowIcon />
                            : <BrightnessHighIcon />}
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppBarComp;