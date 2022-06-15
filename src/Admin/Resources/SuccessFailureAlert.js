import { Alert, Collapse, Grid } from '@mui/material';
import React from 'react';

function SuccessFailureAlert({openSuccessAlert,message,openFailureAlert,setopenSuccessAlert,setopenFailureAlert}) {
    return (
        <Grid item xs={12} md={12} lg={12}>
            <div>
                <Collapse in={openSuccessAlert}>
                    <Alert
                        data-testid="success-alert"
                        onClose={() => { setopenSuccessAlert(false) }}
                        severity="success">
                        {message}
                    </Alert>
                </Collapse>
                <Collapse in={openFailureAlert}>
                    <Alert
                        data-testid="warning"
                        severity="error"
                        onClose={() => { setopenFailureAlert(false) }}>
                        {message}
                    </Alert>
                </Collapse>
            </div>   
        </Grid>
    );
}

export default SuccessFailureAlert;