import React from 'react';
import { Box, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

const AnsibleRoleSearch = () => {
    const globeTheme = useSelector((state) => state.themeReducer.theme);

    return (
        <Box
            sx={{ height: 'calc(100% - 40px)' ,padding: '20px 20px',
            backgroundColor: globeTheme ? '#272727' : '#e6ffec', borderRadius: 5 }}
        >
            <Typography sx={{ fontSize: 21 }} >Search roles</Typography>
            <Paper
                component="form"
                sx={{ p: '2px 4px', mt: 2, display: 'flex', alignItems: 'center' }}
            >
                <SearchIcon sx={{ p: 1 }} />
                <InputBase
                    autoFocus={false}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Roles"
                />
            </Paper>
        </Box>
    )
}

export default AnsibleRoleSearch;