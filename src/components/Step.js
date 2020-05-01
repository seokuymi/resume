import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../constants/Colors';
import {ReactComponent as DotLogo} from '../img/dot1.svg';

export default function Step(params) {
    const classes = useStyles();

    const year = params.year;
    const name = params.name;
    const place = params.place;
    
    return(
        <div className={classes.stepContainer}>
            <div className={classes.dot}> <DotLogo />  </div>
            <div className={classes.contentStep}> 
                <div className={classes.year}> 
                    {year}
                </div>
                <div className={classes.name}> 
                    {name}
                </div>
                <div className={classes.place}> 
                    {place.split('\n').map((item, i) => <p className={classes.placeP} key={i}>{item}</p>)}
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    stepContainer: {
        display: "flex",
        padding: "10px 0px"
    },
    dot: {
        minWidth: 20
    },
    contentStep: {
        display: "flex",
        flexDirection: "column"
    },
    year: {
        color: Colors.grey,
        fontSize: 15
    },
    name: {
        fontSize: 16,
        fontWeight: 500,
        marginTop: -5,
        marginBottom: 3,
        color: Colors.saumon
    },
    place: {
        paddingLeft: 5
    },
    placeP: {
        margin: 0,
        fontSize: 15
    }
});