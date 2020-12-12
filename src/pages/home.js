import React, { useState, useEffect } from 'react';
import { CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddWordDialog from '../components/addWordDialog';
import WordDisplayDialog from '../components/wordDisplayDialog';
import ItemCard from '../components/itemCard';
import { useDispatch, useSelector } from 'react-redux';

import * as DictionaryAction from '../data/actions/DictionaryActions';
import Toaster from '../components/toaster';
import Header from '../components/header';

const useStyles = makeStyles({
    mainContainer: {
        position: "relative",
        backgroundColor: "#fff",
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        padding: 20,
        marginTop: -5,
        zIndex: 20,
    },
    addButton: {
        position: "fixed",
        bottom: 15,
        right: 15,
        zIndex: 30
    },
    card: {
        cursor: "pointer",
        marginTop: 20
    }
});

const Home = (props) => {

    const classes = useStyles();

    const DATA = useSelector(state => state.dictionary);
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState("");

    const [addFormOpen, setAddFormOpen] = useState(false);
    const [wordDisplayOpen, setWordDisplayOpen] = useState(false);
    const [selectedWord, setSelectedWord] = useState({});
    const [isListLoading, setListLoading] = useState(true);
    const [isFormSubmiting, setFormSubmiting] = useState(false);

    const [isToastOpen, setToastOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [severity, setSeverity] = useState("");

    const handleAddFormClose = () => {
        setAddFormOpen(false);
    }

    const handleAddFormSubmit = (enteredValue) => {
        setFormSubmiting(true);

        dispatch(DictionaryAction.addDictionaryItem(enteredValue)).then((data) => {
            setFormSubmiting(false);
            setAddFormOpen(false);
            setToastOpen(true);
            setToastMessage("Word added successfully !");
            setSeverity("success");
        }).catch((error) => {
            setFormSubmiting(false);
            setToastOpen(true);
            setToastMessage(error.message);
            setSeverity("error");
        });
    }

    const handleWordDisplayClose = () => {
        setSelectedWord('');
        setWordDisplayOpen(false);
    }

    const handleToastClose = () => {
        setToastOpen(false);
    }

    const handleSearch = (event) => {
        const word = event.target.value;
        setSearchValue(word);
        setListLoading(true);
        dispatch(DictionaryAction.searchWord(word)).then(() => {
            setListLoading(false);
        }).catch((error) => {
            setListLoading(false);
            setToastOpen(true);
            setToastMessage(error.message);
            setSeverity("error");
        });
    }

    useEffect(() => {
        setListLoading(true);
        dispatch(DictionaryAction.getAllItems()).then((data) => {
            setListLoading(false);
        }).catch((error) => {
            setListLoading(false);
            setToastOpen(true);
            setToastMessage(error.message);
            setSeverity("error");
        })
    }, [dispatch]);

    return (
        <>
            {/* Header File */}
            <Header onChange={handleSearch} value={searchValue} />

            {/* Main container for showing list of words */}
            <div className={classes.mainContainer}>
                {isListLoading &&
                    <CircularProgress style={{
                        marginLeft: "47%"
                    }} />}

                <Grid container justify="center">
                    <Grid item md={6} sm={12} xs={12}>
                        {!isListLoading && DATA.dictionary.length === 0 && <Typography varient="body" component="p" color="secondary" align="center">
                            No word found in dictionary !
                            </Typography>}
                        {!isListLoading && DATA.dictionary.length > 0 && DATA.dictionary.map((item) => <ItemCard key={item._id} data={item} onClick={() => {
                            setSelectedWord(item);
                            setWordDisplayOpen(true);
                        }} />)}
                    </Grid>
                </Grid>
            </div>

            {/* Floating Add Button */}
            <Fab className={classes.addButton} color="primary" aria-label="add" onClick={() => setAddFormOpen(true)}>
                <AddIcon />
            </Fab>

            {/* Add word form dialog */}
            {addFormOpen && <AddWordDialog isOpen={addFormOpen} isSubmiting={isFormSubmiting} handleClose={handleAddFormClose} handleSubmit={handleAddFormSubmit} />}

            {/* Display Word detail dialog */}
            {wordDisplayOpen && <WordDisplayDialog open={wordDisplayOpen} handleClose={handleWordDisplayClose} selectedWord={selectedWord} />}

            {/* Toast for showing different messages */}
            {isToastOpen && <Toaster message={toastMessage} onClose={handleToastClose} open={isToastOpen} severity={severity} />}
        </>
    )
}

export default Home