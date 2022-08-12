import React from 'react'
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';

const OutputGround = () => {

  const output = useSelector(
    (state) => state.groundReducer.output
  );
  console.log(output);
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
        {output}
      </pre>
    </Box>
  )
}

export default OutputGround;