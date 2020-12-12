import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CircularProgress, TextField, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
        width: "100%"
    },
    addButtonContainer: {
        position: "relative"
    },
    loadingBar: {
        position: "absolute",
        left: "50%",
        top: "50%",
        marginTop: -12,
        marginLeft: -12,
    }
}));


const AddWordDialog = (props) => {

    const classes = useStyles();
    const [enteredWord, setEnteredWord] = useState("");
    const [formError, setFormError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleClose = () => {
        props.handleClose();
        setEnteredWord("");
    }

    const handleFormSubmit = () => {
        if (enteredWord.length === 0) {
            setFormError(true);
            setErrorMsg("Please enter something to add !");
            return;
        }
        setFormError(false);
        setErrorMsg("");
        props.handleSubmit(enteredWord);
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth={"xs"}
            open={props.isOpen}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle id="max-width-dialog-title">Add to Dictionary</DialogTitle>
            <DialogContent>
                <TextField label="New Word" value={enteredWord} onChange={(event) => setEnteredWord(event.target.value)} className={classes.formControl} />
                {formError && <Typography variant="body2" component="p" color="secondary" style={{
                    paddingTop: 5,
                    paddingBottom: 5
                }}>{errorMsg}</Typography>}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    CANCEL
                </Button>
                <div className={classes.addButtonContainer}>
                    <Button disabled={props.isSubmiting} onClick={handleFormSubmit} color="primary">
                        ADD
                </Button>
                    {props.isSubmiting && <CircularProgress size={24} className={classes.loadingBar} />}
                </div>
            </DialogActions>
        </Dialog>
    )
}

export default AddWordDialog