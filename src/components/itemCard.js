import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';

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
    title: {
        textTransform: "capitalize"
    },
    card: {
        cursor: "pointer",
        marginTop: 20
    },
    information: {
        marginTop: 8
    }
});

const ItemCard = (props) => {

    const classes = useStyles();
    const item = props.data;

    return (
        <Card className={classes.card} variant="outlined" onClick={props.onClick}>
            <CardContent>
                <Typography variant="h5" className={classes.title} component="h2">
                    {item.word}
                </Typography>


                {item.information.map((item) => <Typography key={item.lexicalCategory.id} variant="body2" component="p" className={classes.information}>
                        [{item.lexicalCategory.id}] {item.entries[0].senses[0].definitions[0]}
                    </Typography>)}
            </CardContent>
        </Card>
    )
}

export default ItemCard