import { Send } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'


const CommandPrompt = () => {
    return (
        <Box
            component="form"
            autoComplete="off"
            className="boxform"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
            }}
        >
            <Typography variant="h4" sx={{mr:2}}>#</Typography>
            <TextField
                sx={{
                    width: "60%",
                    '& input': {fontSize: 26,fontFamily: 'consolas'},
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: (theme)=> theme.palette.mode == 'dark' ? 'white': 'black',
                        }
                    }
                }}
                size="small"
                variant="outlined"
            />
            <Button
                variant="contained"
                size='large'
                type='submit'
                disableElevation
                endIcon={<Send />}
                sx={{ ml: 2, fontSize: 20 }}
            >Run</Button>
        </Box>
    )
}

export default CommandPrompt;