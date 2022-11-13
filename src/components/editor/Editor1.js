import React, { useState } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from '@uiw/codemirror-theme-dracula';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { Button, Typography } from '@mui/material';
import axios from 'axios';


const Editor1 = (props) => {
    const [code, setCode] = useState('');
    const onCodeChange = (editor) => {
        setCode(editor);
        console.log(editor);
    }
    const fetchFileData = async () => {
        await axios.post('http://localhost:5000/filedata',{
            file: 'inventory'
        })
        .then((r)=>{
            setCode(r.data);
        })
        .catch((err)=>console.log(err));
    }
    return (
        <div>
        <Typography>{props.lang}</Typography>
        <CodeMirror
            width='400px'
            height='400px'
            value={code}
            theme={dracula}
            onChange={(editor)=>onCodeChange(editor)}
            style={{fontSize: 20}}
        />
        <Button
            onClick={()=>fetchFileData()}
        >Click</Button>
        <Typography> {code} </Typography>
        </div>
    )
}
export default Editor1;