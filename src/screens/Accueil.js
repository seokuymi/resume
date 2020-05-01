import * as React from 'react';
import fond from '../img/accueil.jpg';
import Styles from '../constants/Styles';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Accueil(params) {

    const classes = useStyles();
    const infos = [{name:"Âge",value:"25 ans"},{name:"E-mail",value:"quentin.parmentier.54@gmail.com"},{name:"En poste chez",value:"Altran"}]

    return(
        <div className={classes.accueil}>
            <div> 
                <p className={classes.me}>Je suis <span> Développeur </span></p>
            </div>
            <div className={classes.info}>

                {infos.map((info) => createInfo(info))}

            </div>
            <div className={[classes.buttons,classes.buttonSize].join(' ')}> 
                <Button variant="outlined" onClick={() => params.changeRubrique('mon cv')} className={classes.buttonO}> MON CV </Button>
                <Button variant="outlined" onClick={() => params.changeRubrique('contact')} className={classes.buttonO}> CONTACTEZ-MOI </Button>
            </div>
        </div>
    )

    function createInfo(info){

        return(
            <p className={classes.p} key={info.name}> 
                <span className={classes.name}> {info.name} :</span> 
                <span className={classes.value}> {info.value}</span> 
            </p>
        )
    }
}

const useStyles = makeStyles({
    accueil : {
        backgroundImage: `url(${fond})`,
        backgroundSize : "cover",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    me : {
        display : "flex",
        fontSize : 40,
        fontWeight: 700,
        margin: "13px 0px"
    },
    p :{
        margin: '10px 0px'
    },
    name : Styles.gauchpoint,
    value : Styles.droitepoint,
    buttons : Styles.buttonsAlign,
    buttonSize : {
        width: '95%',
        marginTop: 35
    },
    buttonO : Styles.buttonsO
    
    
  });