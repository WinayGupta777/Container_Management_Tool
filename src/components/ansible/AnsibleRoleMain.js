import React from 'react';
import { Box } from '@mui/material';
import AnsibleRoleSearch from './AnsibleRoleSearch';
import AnsibleRoleTreeView from './AnsibleRoleTreeView';
import AnsibleRoleList from './AnsibleRoleList';
import "../../css/AnsibleRoleMain.css";

const AnsibleRoleMain = () => {
  return (
    <Box
      className='mainbox'
      sx={{ ml: "342px", paddingBottom: "10px", pt: "73px", height: "calc(100vh - 83px)" }}
    >
      <div className="rolebox">
        <AnsibleRoleList />
      </div>
      <div className="searchbox"> 
        <AnsibleRoleSearch />
      </div>
      <div className="treebox">
        <AnsibleRoleTreeView />
      </div>
      <div className="editorbox"> </div>
    </Box>
  )
}

export default AnsibleRoleMain;