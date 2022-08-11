import { Box } from '@mui/system';
import React from 'react'

const TerminalGround = () => {
  return (
    <Box
        sx={{
            fontSize: 25,
            fontFamily: 'consolas',
            borderRadius: 2,
            p:2,
            backgroundColor: (theme)=>theme.palette.mode === 'dark' ? '#222529' : 'black',
        }}
    >
        Command Output
    </Box>
  )
}

export default TerminalGround;