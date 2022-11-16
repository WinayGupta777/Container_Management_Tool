import React from 'react';
import { Box } from '@mui/material';
import AnsibleRoleSearch from './AnsibleRoleSearch';

const AnsibleRoleMain = () => {
  return (
    <Box
        sx={{ ml: "332px", pt: "63px", height: "calc(100vh - 63px)" }}
    >
      <AnsibleRoleSearch />
    </Box>
  )
}

export default AnsibleRoleMain;