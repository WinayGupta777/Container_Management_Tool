import React from 'react'
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';

const OutputGround = (props) => {

  const d_gui_output = useSelector(
    (state) => state.groundReducer.d_gui_output
  );
  const d_cli_output = useSelector(
    (state) => state.groundReducer.d_cli_output
  );
  const s_cli_output = useSelector(
    (state) => state.groundReducer.s_cli_output
  );

  const renderOutput=()=>{
    if (props.plateform === 'systemcli')
      return s_cli_output;
    if (props.plateform === 'dockercli')
      return d_cli_output;
    if (props.plateform === 'dockergui')
      return d_gui_output;
    return null;
  }

  return (
    <Box
      sx={{
        fontSize: 23,
        fontFamily: 'consolas',
        maxHeight: '45vh',
        borderRadius: 2,
        overflow: 'auto',
        p: 2,
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#222529' : '#e6ffec',
      }}
    >
      <pre>
        {renderOutput()}
      </pre>
    </Box>
  )
}

export default OutputGround;