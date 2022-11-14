import { Box, Divider, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from '@uiw/codemirror-theme-dracula';
import { bbedit } from '@uiw/codemirror-theme-bbedit';
//import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import "../../css/AnsibleConfigureMain.css";

const AnsibleConfigurationInv = () => {
  const globeTheme = useSelector(
    (state) => state.themeReducer.theme
  );
  return (
    <Box className='inv'>
      <Typography sx={{ p: 1, fontFamily: 'consolas', fontWeight: '600' }}>inventory</Typography>
      <Divider />
      
      <CodeMirror 
        width='auto'
        height='82vh'
        //value={code}
        theme={globeTheme ? dracula : bbedit}
        //onChange={(editor)=>onCodeChange(editor)}
        style={{fontSize: 20}}
      />
    </Box>
  )
}

export default AnsibleConfigurationInv;