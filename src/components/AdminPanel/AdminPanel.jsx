import { Grid } from '@material-ui/core';
import React from 'react';
import Add from './Add';
import AddTable from './AddTable';

const AdminPanel = () => {
    return (
        <div>
            <Grid>
                <Add />
                <AddTable />
            </Grid>
        </div>
    );
};

export default AdminPanel;