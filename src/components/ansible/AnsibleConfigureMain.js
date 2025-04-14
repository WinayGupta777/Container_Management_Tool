import { Box } from '@mui/material';
import React from 'react';
import AnsibleConfigurationCfg from './AnsibleConfigurationCfg';
import AnsibleConfigurationInv from './AnsibleConfigurationInv';
import "../../css/AnsibleConfigureMain.css";

const AnsibleConfigureMain = () => {
  return (
    <Box
        sx={{ 
            ml: "330px", pt: "63px", height: "calc(100vh - 63px)", 
            pl: '1%',pr: '1%', display: 'flex', justifyContent: 'center', }}
    >
      <AnsibleConfigurationCfg />
      <AnsibleConfigurationInv />
    </Box>
  )
}

export default AnsibleConfigureMain;