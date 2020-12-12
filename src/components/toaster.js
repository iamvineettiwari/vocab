import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Toaster = (props) => {
    return (
        <Snackbar open={props.open} autoHideDuration={6000} onClose={props.onClose}>
            <Alert onClose={props.onClose} severity={props.severity}>
                {props.message}
            </Alert>
        </Snackbar>
    )
}

export default Toaster;