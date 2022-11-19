import React from 'react'
import { Box, Divider, IconButton, Typography } from '@mui/material';
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from '@uiw/codemirror-theme-dracula';
import { bbedit } from '@uiw/codemirror-theme-bbedit';
//import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import SaveIcon from '@mui/icons-material/Save';
import { useSelector } from 'react-redux';
import "../../css/AnsibleConfigureMain.css";
import "../../css/Editor.css";

const AnsibleConfigurationCfg = () => {
  const globeTheme = useSelector((state) => state.themeReducer.theme);
  const cfgData =
    `[defaults]
inventory = /etc/ansible/hosts

[privilege_escalation]
become = yes
become_method = sudo
become_user = root
become_ask_pass = no`;

  return (
    <Box className='cfg'>
      <div className='fileheader'>
        <div id='fileBlock'>
          <Typography sx={{ p: 1, fontFamily: 'consolas', fontWeight: '600' }}>ansible.cfg</Typography>
          <Box
            className='fileLoc'
            sx={{ backgroundColor: globeTheme ? '#282a36' : '#e6ffec' }}
          >/etc/ansible/ansible.cfg</Box>
        </div>
        <IconButton>
          <SaveIcon />
        </IconButton>
      </div>

      <div className="editorBox">
        <Divider />
        <CodeMirror
          width='auto'
          value={cfgData}
          theme={globeTheme ? dracula : bbedit}
          //onChange={(editor)=>onCodeChange(editor)}
          style={{ fontSize: 20, flex: 1 }}
        />
      </div>
    </Box>
  )
}

export default AnsibleConfigurationCfg;