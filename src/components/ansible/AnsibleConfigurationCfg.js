import React from 'react'
import { Box, Divider, Typography } from '@mui/material';
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from '@uiw/codemirror-theme-dracula';
import { bbedit } from '@uiw/codemirror-theme-bbedit';
//import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { useSelector } from 'react-redux';
import "../../css/AnsibleConfigureMain.css";

const AnsibleConfigurationCfg = () => {
  const globeTheme = useSelector(
    (state) => state.themeReducer.theme
  );
  return (
    <Box className='cfg'>
      <Typography sx={{ p: 1, fontFamily: 'consolas', fontWeight: '600' }}>ansible.cfg</Typography>
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

export default AnsibleConfigurationCfg;