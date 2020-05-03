import * as React from 'react';
import rectoLogo from '../img/recto.svg';
import versoLogo from '../img/verso.svg';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../constants/Colors';
import { PlaceTwoTone, MailTwoTone, PhoneAndroidTwoTone } from '@material-ui/icons';

export default function CV(params) {
    const classes = useStyles();
    const [face,setFace] = React.useState(true);
    const [isturning,setTurn] = React.useState(false);

    return(
        <div onClick={(event) =>{setTurn(true);setTimeout(swipe, 250)}} className={`${classes.cvContainer} ${face === true ? classes.recto : classes.verso} ${isturning === true ? classes.startflipRight : null}`}>
            <div className={classes.centering}> 
                {face === true ? renderRecto() : renderVerso()}
            </div>
        </div>
    )
    
    function swipe(){
        setTurn(false);
        setFace(!face);
    }

    function renderRecto(){
        return(
            <>
                <p className={classes.rectoName}> Quentin PARMENTIER</p> 
                <p className={classes.rectoName}> Ingénieur Sciences Cognitives</p> 
            </>
        )
    }

    function renderVerso(){
        return(
            <>
                <div className={classes.versoName}> <PlaceTwoTone /> <span className={classes.textVerso}>Nancy</span> </div> 
                <a onClick={(event) => stopPropag(event)} className={classes.versoName} href="mailto:quentin.parmentier.54@gmail.com"><MailTwoTone /> <span className={classes.textVerso}>quentin.parmentier.54@gmail.com</span></a> 
                <div className={classes.versoName}> <PhoneAndroidTwoTone /> <span className={classes.textVerso}>06.27.02.82.90</span></div> 
            </>
        )
    }

    function stopPropag(event){
        event.stopPropagation();
        navigator.clipboard.writeText("quentin.parmentier.54@gmail.com")
    }
    
}

const useStyles = makeStyles({
    cvContainer: {
        width: '85%',
        height: '100%',
        margin: 'auto',
        maxWidth: 400,
        minWidth: 320,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        height: 'calc(100vh - 60px)'
    },
    recto: {
        animation: `$flipRight 300ms`,
        background: `url(${rectoLogo}) center no-repeat`,
        backgroundSize: 'contain'
    },
    verso: {
        animation: `$flipLeft 300ms`,
        background: `url(${versoLogo}) center no-repeat`,
        backgroundSize: 'contain',
        transform: "rotateY(0deg)"
    },
    centering: {
        marginBottom: '29%'
    },
    rectoName: {
        fontSize: 22,
        fontWeight: 600,
        textAlign: "center",
        margin: 0
    },
    versoName: {
        color: "#176ae6",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 19,
        fontWeight: 600,
        textDecoration: "none",
        padding: 3
    },
    textVerso: {
        color: Colors.black
    },
    startflipRight: {
        animation: `$flipRight1 300ms`,
    },
    startflipLeft: {
        animation: `$flipLeft1 300ms`,
    },
    "@keyframes flipRight": {
        "0%": {
            transform: "rotateY(90deg)"
        },
        "100%": {
            transform: "rotateY(0deg)"
        }
    },
    "@keyframes flipLeft": {
        "0%": {
            transform: "rotateY(-90deg)"
        },
        "100%": {
            transform: "rotateY(0deg)"
        }
    },
    "@keyframes flipRight1": {
        "0%": {
            transform: "rotateY(0deg)"
        },
        "100%": {
            transform: "rotateY(-90deg)"
        }
    },
    "@keyframes flipLeft1": {
        "0%": {
            transform: "rotateY(0deg)"
        },
        "100%": {
            transform: "rotateY(90deg)"
        }
    }
});