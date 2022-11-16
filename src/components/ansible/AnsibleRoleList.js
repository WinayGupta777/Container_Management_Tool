import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';

const AnsibleRoleList = () => {
    const globeTheme = useSelector((state) => state.themeReducer.theme);

    return (
        <Box
            sx={{
                height: 250, width: '70%', p: '20px', borderRadius: 5,
                backgroundColor: globeTheme ? '#121212' : '#e6ffec',
            }}
        >
            <DataGrid
                hideFooter={true}
                rowsPerPageOptions={[5]}
                onRowClick={() => console.log("Row selected")}
                columns={[{ field: 'Role name', width: 200 }]}
                rows={[
                    { id: 1, 'Role name': 'ansible_freeipa', },
                    { id: 2, 'Role name': 'linux_system_roles' }
                ]}
            />
        </Box>
    )
}

export default AnsibleRoleList;