import React from 'react';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

const SearchMain = () => {
    return (
        <div>
            <Paper
                component="form"  elevation={1}
                sx={{display: 'flex', p: '2px 4px',m:1, alignItems: 'center', borderRadius: 1}}
            >

                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <InputBase 
                    sx={{ ml: 1, mr:2 , flex: 1 }}
                    placeholder="Search"
                />
            </Paper>
        </div>
    )
}

export default SearchMain;