import { Box, Divider, Typography } from '@mui/material';
import React from 'react'
import "../../css/AnsibleConfigureMain.css";

const AnsibleConfigurationCfg = () => {
  return (
    <Box
      className='cfg'
      sx={{ backgroundColor: (theme) => theme.palette.mode == 'dark' ? 'rgb(36, 36, 36)' : '#e6ffec' }}
    >
      <Typography sx={{ p: 1, fontFamily: 'consolas', fontWeight: '600' }}>ansible.cfg</Typography>
      <Divider />

    </Box>
  )
}

export default AnsibleConfigurationCfg;