import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function Competences(params) {
    const classes = useStyles();
    const images = require.context("../img", true);
    const blocks = [ 
     {name:"Front-End",competences:["HTML5","JSX","Javascript","jQuery"],path:["html5.svg","jsx.svg","js.svg","jquery.svg"]}
    ,{name:"Frameworks JS",competences:["React","React Native","VueJS"],path:["react.svg","jsx.svg","vuejs.svg"]}
    ,{name:"Back-End",competences:["PHP","Laravel","SQL","noSQL"],path:["php.svg","laravel.svg","sql.svg","nosql.svg"]}
    ,{name:"Style",competences:["CSS3","Bootstrap","p5.js","Animation"],path:["css3.svg","bootstrap.svg","p5.svg","css3.svg"]} 
    ,{name:"Autre",competences:["Github","Sketch","IA","Cuisine"],path:["github1.svg","sketch.svg","tensorflow.svg","cuisine.svg"]}
    ];

    return(
        <>
            {blocks.map((block,index) => createBlock(block,index))}
        </>
    )

    function createBlock(blockVals,index){
        return(
        <div key={index} className={`${classes.block} ${blockVals.name === 'Autre' ? classes.last : null}`}> 
            <div className={classes.titre}> {blockVals.name} </div>
            <div className={classes.competences}> 
                {blockVals.competences.map((competence,index) => 
                    <div key={index} className={classes.divImage}>
                        <img className={classes.image} src={images('./'+blockVals.path[index])} />
                        <p className={classes.name}> {competence} </p>
                    </div> )}
            </div>
        </div>
        )
    }
}


const useStyles = makeStyles({
    competences : {
        display: "flex",
        justifyContent: "center",
        flexFlow: "wrap"
    },
    image : {
        height: "100%",
        width: "100%",
        maxHeight: 100,
        objectFit: "fill",
    },
    divImage : {
        margin: "20px 20px 0px 20px",
        width: "15%",
        height: 125,
        minWidth: 100,
        display: "flex",
        flexDirection: "column"
    },
    block:{
        width: "85%",
        padding: "20px 20px 30px 20px",
        backgroundColor: "white",
        margin: "auto",
        marginTop: 50,
        boxShadow: "#0000007d 0px 0px 8px"
    },
    titre: {
        borderBottom: "black 1px solid",
        marginBottom: 10,
        paddingBottom: 5,
        fontSize: 33,
        fontWeight: 500
    },
    name: {
        fontSize: 16,
        margin: 0,
        alignSelf: "center",
        fontWeight: 700,
    },
    last: {
        marginBottom: 50
    }
});