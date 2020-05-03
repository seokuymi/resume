import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MoreVert } from '@material-ui/icons';
import {ReactComponent as Github} from '../img/github.svg';
import {ReactComponent as ExternalLink} from '../img/externalLink.svg';


export default function Step(props) {
    const classes = useStyles({props: props});
    const images = require.context("../img/projects", true);
    const [show,setShow] = React.useState(false);
    const [firstLoad,setFirstLoad] = React.useState(true);

    let img = images('./' + props.url);
    return(
        <>
            <div className={classes.card} onClick={() => {setFirstLoad(false);setShow(!show)}}>
                <div className={classes.divphoto}>
                    <img alt="photo_projet" className={`${classes.photo} ${props.photoFit === true ? classes.photoFit : null}`} src={img} /> 
                </div>
                <div className={classes.text}>
                    <div className={classes.title}> {props.title} <MoreVert /></div>
                    <div className={classes.description}>  
                        <p className={classes.textDesc}>{props.text[0]}</p>
                    </div>
                </div>
                <div className={`${classes.hiddenPart} ${firstLoad === true ? null : show === true ? classes.animation : classes.animationinverse}`}> 
                    <div className={classes.titre}> Réalisations </div>
                    <div className={classes.liste}> 
                        {props.text.map((value,index) => index!== 0 ? <li className={classes.item} key={index}> {value} </li> : null)}
                    </div>
                    <div className={classes.rendubot}>
                        {props.path !== "" ? 
                            <a onClick={(event) => event.stopPropagation()} rel="noopener noreferrer" target='_blank' href={props.path}>
                                <ExternalLink className={classes.svg}/>
                            </a> : null}
                        {props.git !== "" ?
                            <a onClick={(event) => event.stopPropagation()} rel="noopener noreferrer" target='_blank' href={props.path}>
                                <Github className={classes.svg}/> 
                            </a>: null}
                    </div>
                </div>
            </div>
        </>
    )
}

const useStyles = makeStyles(
    {
        divphoto : {
            height: '50%'
        },
        photo : {
            width: '100%',
            height: '100%',
        },
        photoFit :{
            objectFit: 'cover',
        },
        card : {
            minWidth : 270,
            maxWidth : 310,
            width : "43%",
            height: 400,
            backgroundColor: "white",
            marginTop : 25,
            cursor: "pointer",
            overflow: "hidden",
            boxShadow: "#0000007d 0px 0px 8px"
        },
        title : {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            fontWeight: 600,
            height: "25%",
        },
        titre : {
            fontSize: 22,
            fontWeight: 600,
            height: "15%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#2270e7"
        },
        text: {
            padding: "0 15px",
            height: "50%"
        },
        description : {
            '&::-webkit-scrollbar':{
                display: 'none'
            },
            height: "75%",
            overflow: "auto",
            '-ms-overflow-style': 'none'
        },
        hiddenPart : {
            backgroundColor : "white",
            position: "relative",
            bottom: "0%",
            height: "100%",
            width: "100%",
        },
        liste : {
            padding: "10px 15px 0px 15px",
            height: '60%',
            borderBottom: "solid 1px #e8e8e8"
        },
        item : {
            padding: "5px 0px",
            fontWeight: 500
        },
        rendubot : {
            height: 'calc(25% - 10px)',
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        },
        animation : {
            animation: `$show 500ms`,
            bottom: "100%"
        },
        animationinverse : {
            animation: `$unshow 500ms`,
        },
        svg: {
            height: 60,
            width: 60
        },
        textDesc: {
            margin: 0
        },
        "@keyframes show": {
            "0%": {
                bottom: "0%"
            },
            "100%": {
                bottom: "100%"
            }
        },
        "@keyframes unshow": {
            "0%": {
                bottom: "100%"
            },
            "100%": {
                bottom: "0%"
            }
        }
    }
);