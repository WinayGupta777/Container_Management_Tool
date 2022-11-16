import React from 'react';
import { Box, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const AnsibleRoleSearch = () => {
    return (
        <Box
            sx={{ width: 265, minHeight: 130, padding: '20px 20px',
                  backgroundColor: '#313131', borderRadius: 5 }}
        >
            <Typography sx={{ fontSize: 21 }} >Search roles</Typography>
            <Paper
                component="form"
                sx={{ p: '2px 4px', mt: 2, display: 'flex', alignItems: 'center', width: 250 }}
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