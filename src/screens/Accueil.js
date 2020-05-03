import * as React from 'react';
import fond from '../img/accueil.jpg';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Accueil(params) {

    const classes = useStyles();
    const infos = [{name:"Âge",value:"25 ans"},{name:"E-mail",value:"quentin.parmentier.54@gmail.com"},{name:"En poste chez",value:"Altran"}]
    const [textAnime,setTxt] = React.useState("");
    const allTxt = ["Ingénieur","Développeur","Cogniticien","Passionné"];
    const [id, setId] = React.useState(0);
    const [complete, setComplete] = React.useState(false);

    React.useEffect(() => {
        if(!complete){
            setTimeout(animeTxt, 150);
        }else{
            if(textAnime.length > 0)
            setTimeout(reset, 50);
            else {
                if(id < (allTxt.length - 1)){ 
                    setId(id+1); 
                }else {
                    setId(0); 
                }
                setComplete(false)
            }
        }
    });
   

    function animeTxt(){
        if(allTxt[id] !== textAnime){
            setTxt(textAnime + allTxt[id][textAnime.length]);
        }else{
            setComplete(true)
        }
    }

    function reset(){

        setTxt(textAnime.substring(0,textAnime.length-1))

        //if(id < (allTxt.length - 1)){ 
        //    setId(id+1); 
        //    setTxt(allTxt[id+1][0]) 
        //}else {
        //    setId(0); 
        //    setTxt(allTxt[0][0])
        //}

    }

    return(
        <div className={classes.accueil} style={{height:params.height}}>
            <div> 
                <p className={classes.me}>Je suis <span className={classes.textAnime}> {textAnime} </span> <span className={classes.cursor}>|</span> </p>
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
            <span className={classes.name}> {info.name} : </span>
            {
                info.name !== "E-mail" ? ( 
                <span className={classes.value}> {info.value}</span>)
                : <a className={classes.value} href="mailto:quentin.parmentier.54@gmail.com"><span className={classes.value}>{info.value}</span></a>
            }
            </p>
        )
    }
}

const useStyles = makeStyles({
    accueil : {
        background: `url(${fond}) no-repeat center`,
        backgroundSize : "cover",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    me : {
        fontSize : 40,
        fontWeight: 700,
        margin: "13px 0px",
        color: "white",
        textAlign: "center"
    },
    p :{
        margin: '10px 0px',
        color: "white"
    },
    textAnime: {
        color: Colors.saumon,
    },
    cursor: {
        animation: `$cursor 800ms infinite`,
        opacity: 100
    },
    name : Styles.gauchpoint,
    value : Styles.droitepoint,
    buttons : Styles.buttonsAlign,
    buttonSize : {
        width: '95%',
        marginTop: "20%"
    },
    buttonO : Styles.buttonsO,
    "@keyframes cursor": {
        "0%": {
            opacity: 0
        },
        "50%":{
            opacity: 100
        },
        "100%": {
            opacity: 0
        }
    }
    
    
  });