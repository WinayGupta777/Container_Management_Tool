import React from 'react'
import { Box, Divider, IconButton, Typography } from '@mui/material';
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from '@uiw/codemirror-theme-dracula';
import { bbedit } from '@uiw/codemirror-theme-bbedit';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import SaveIcon from '@mui/icons-material/Save';
import { useSelector } from 'react-redux';
import "../../css/Editor.css";
import "../../css/AnsibleRoleEditor.css";

const AnsibleRoleEditor = () => {
    const globeTheme = useSelector((state) => state.themeReducer.theme);

    return (
        <Box className='editorTab'>
            <div className='fileheader'>
                <div id='fileBlock'>
                    <Typography sx={{ p: '10px 20px', fontFamily: 'consolas', fontWeight: '600' }}>main.yml</Typography>
                    <Box
                        className='fileLoc'
                        sx={{ backgroundColor: globeTheme ? '#282a36' : '#e6ffec' }}
                    >~/roles/apache/tasks</Box>
                </div>
                <IconButton>
                    <SaveIcon />
                </IconButton>
            </div>

            <div className="editorBox">
                <Divider />
                <CodeMirror
                    width='auto'
                    height='50%'
                    // value={cfgData}
                    theme={globeTheme ? dracula : bbedit}
                    //onChange={(editor)=>onCodeChange(editor)}
                    extensions={[loadLanguage('yaml')]}
                    style={{ fontSize: 20, flex: 1 }}
                />
            </div>
        </Box>
    )
}

export default AnsibleRoleEditor;