import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    title: {
        textTransform: "capitalize"
    },
    infoContainer: {
        padding: 20,
        marginTop: 20
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const WordDisplayDialog = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar} position="sticky">
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h5" className={classes.title}>
                            {props.selectedWord.word}
                        </Typography>
                        <IconButton style={{
                            marginLeft: "auto"
                        }} edge="end" color="inherit" onClick={props.handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                {props.selectedWord.information.map((item, index) => <div className={classes.infoContainer} key={index.toString()}>
                    <Typography className={classes.pos} color="textSecondary">
                        {item.lexicalCategory.id}
                    </Typography>
                    {item.entries[0].etymologies && <Typography className={classes.pos} color="textSecondary">
                        Origin: {item.entries[0].etymologies[0]}
                    </Typography>}

                    {item.entries[0].senses.map((sense, index) => <Typography key={index.toString()} style={{
                        marginTop: 15
                    }}>
                        {sense.definitions[0]}
                        {sense.examples && <ul style={{
                            marginTop: 0,
                            paddingTop: 0
                        }}>{sense.examples.map((ex, _in) => <li key={_in.toString()}>{ex.text}</li>)}
                        </ul>}
                        {sense.subsenses && sense.subsenses.map((subsense, _si) => <Typography key={_si.toString()}>
                            {subsense.definitions[0]}
                            {subsense.examples && <ul style={{
                                marginTop: 0,
                                paddingTop: 0
                            }}>{subsense.examples.map((ex, _in) => <li key={_in.toString()}>{ex.text}</li>)}
                            </ul>}
                        </Typography>)}
                    </Typography>)}
                </div>)}

            </Dialog>
        </div>
    );
}

export default WordDisplayDialog