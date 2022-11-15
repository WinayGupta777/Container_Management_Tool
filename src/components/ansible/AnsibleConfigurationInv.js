import { Box, Divider, IconButton, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from '@uiw/codemirror-theme-dracula';
import { bbedit } from '@uiw/codemirror-theme-bbedit';
import SaveIcon from '@mui/icons-material/Save';
//import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import "../../css/AnsibleConfigureMain.css";

const AnsibleConfigurationInv = () => {
  const globeTheme = useSelector((state) => state.themeReducer.theme);
  const invData = 
`[dev]
node1.example.com

[test]
node2.example.com

[prod]
node[3:4].example.com`;
  return (
    <Box className='inv'>
      <div className='fileheader'>
        <div id='fileBlock'>
          <Typography sx={{ p: 1, fontFamily: 'consolas', fontWeight: '600' }}>inventory</Typography>
          <Box
            className='fileLoc'
            sx={{ backgroundColor: globeTheme ? '#282a36' : '#e6ffec' }}
          >/etc/ansible/hosts</Box>
        </div>
        <IconButton>
          <SaveIcon />
        </IconButton>
      </div>
      <Divider />

      <CodeMirror
        width='auto'
        height='82vh'
        value={invData}
        theme={globeTheme ? dracula : bbedit}
        //onChange={(editor)=>onCodeChange(editor)}
        style={{ fontSize: 20 }}
      />
    </Box >
  )
}

export default AnsibleConfigurationInv;