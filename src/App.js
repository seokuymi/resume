import React from 'react';

import Styles from './constants/Styles'
import Colors from './constants/Colors'

import {Avatar,Link, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, LinkedIn, MoreVert } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Accueil from './screens/Accueil';
import CV from './screens/CV';
import Contact from './screens/Contact';
import Projet from './screens/Projet';
import Competences from './screens/Competences';
import './App.css';

import avatar from './img/avatar.jpg';

function App() {

  const [selected,setSelected] = React.useState("accueil");
  const [mooveleft,setMooveleft] = React.useState(false);
  const [showBar,setShowBar] = React.useState(false);
  const [animationBar,setAnimationBar] = React.useState(false);
  const classes = useStyles();
  const rubriques = ['accueil','mon cv','mes compétences','mes projets','contact'];
  const matches = useMediaQuery('(min-width:850px)');

  return (

    <div className={`${classes.app} ${selected!=="accueil" ? null : classes.rowReverse} ${matches === false ? classes.column : null }`}>
      
      {matches === true ? <div className={`${classes.navigation} ${mooveleft===true ? classes.mooveleft : classes.mooveright}`}>
        {renderNav()}
      </div> : renderSmartphone()}

      <div className={`${selected!=="accueil" ? classes.screen : classes.home} ${matches === false ? classes.calculated : classes.full}`}>
        {renderComponent()}
      </div> 

    </div>
  );
  
  function renderNav(){
    return(
      <>
        <Avatar alt="Avatar" style={{height:150,width:150, marginTop:50}} src={avatar} />
        <p className={classes.myname}> Quentin PARMENTIER</p>
        <div>

          <Link className={classes.icon} color="inherit" target="_blank" href="https://www.linkedin.com/in/q-parmentier/" > <LinkedIn color="inherit" /> </Link>
          <Link className={classes.icon} color="inherit" target="_blank" href="https://github.com/seokuymi" > <GitHub color="inherit" /> </Link>
          
        </div>
        <div style={Styles.mt30}>
          {rubriques.map((name,index) => 
            <p 
              key={index} 
              className={`${classes.icon} ${classes.rubrique} ${selected === name ? classes.active : ""}`} 
              onClick={() => changeRubrique(name)}
            > 
              {name}
            </p> )}
        </div>
      </>
    )
  }

  function renderSmartphone(){
      return(
        <>
        <div className={classes.topBar}>
          <div className={classes.contentTop}> 
            <p className={classes.monNom}> Quentin PARMENTIER </p> 
            <IconButton onClick={() => {setAnimationBar(!animationBar);setTimeout(changeShowBar,450)}} component="span">
              <MoreVert />
            </IconButton>
          </div>  
        </div>
        {showBar === true ? <div onClick={() => {setAnimationBar(!animationBar);setTimeout(changeShowBar,450)}} className={classes.shadow}/> : null }
        <div className={`${showBar === false ? classes.none : null } ${classes.navigation} ${classes.rightSmart} ${animationBar === true ? classes.mooveleftSmart : classes.mooverightSmart}`}>
          {renderNav()}
        </div>
        </>
      )
  }

  function renderComponent(){
    switch (selected) {
      case "accueil":
        return (<Accueil height={matches === true ? "100%" : "calc(100vh - 60px)"} changeRubrique={changeRubrique} />)

      case "mon cv":
        return (<CV />)

      case "mes compétences":
        return (<Competences />)

      case "contact":
        return (<Contact />)

      case "mes projets":
        return (<Projet />)
        
      default:
        break;
    }
  }

  function changeRubrique(rubrique){
    
    if(selected === "accueil" && rubrique !== "accueil"){
      //C'est qu'on doit bouger à gauche
      setMooveleft(true);
    }else if(selected !== "accueil" && rubrique === "accueil"){
      setMooveleft(false);
    }

    setTimeout(stopAnim(rubrique), 400)
  }

  function changeShowBar(){
    animationBar === false ? setShowBar(true) : setShowBar(false)
  }

  function stopAnim(rubrique){
    setSelected(rubrique);
  }
}

const useStyles = makeStyles({
  icon : Styles.icon,
  rubrique : Styles.rubrique,
  app : {
    display: 'flex',
    fontFamily: "'Baloo Paaji 2'",
    color: Colors.black
  },
  navigation : {
    flex : 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    maxHeight : '100vh',
    overflow : 'hidden',
    boxShadow: "#0000007d 0px 0px 8px",
    backgroundColor: "white",
    position: "relative",
    zIndex: 5
  },
  home : {
    flex : 1,
    overflow : "auto"
  },
  screen : {
    flex : 3,
    overflow : "auto",
    backgroundColor: Colors.background
  },
  full : {
    minHeight: "100vh",
    maxHeight : '100vh',
  },
  calculated : {
    minHeight: "calc(100vh - 60px)",
    maxHeight : 'calc(100vh - 60px)',
  },
  myname : {
    fontWeight: 700,
    fontSize: 22
  },
  active : {
    color : Colors.blue
  },
  mooveleft : {
    animation: `$mooveleft 300ms`,
  },
  mooveright : {
    animation: `$mooveright 300ms`,
  },
  mooveleftSmart : {
    animation: `$mooveleftSmart 500ms`,
  },
  mooverightSmart : {
    animation: `$mooverightSmart 500ms`,
  },
  rightSmart : {
    position: "absolute",
    height: 'calc(100% - 60px)',
    top: 60,
    width: 250,
    boxShadow: "#0000007d 0px 8px 8px",
    right: 0
  },
  none : {
    display: "none"
  },
  topBar : {
    height: 60,
    width: "100%",
    boxShadow: "#0000007d 0px 0px 8px",
    zIndex: 6,
    display: "flex"
  },
  contentTop : {
    width: "100%",
    padding: "7px 30px",
    display: "flex",
    justifyContent: "space-between",
  },
  rowReverse : {
    flexDirection:'row-reverse'
  },
  column : {
    flexDirection:'column'
  },
  monNom : {
    fontSize: 20,
    fontWeight: 600,
    margin: 0,
    alignSelf: "center",
  },
  shadow : {
    backgroundColor: "#ffffff70",
    width: "100%",
    position: "absolute",
    height: "calc(100vh - 60px)",
    zIndex: 2,
    top: 60,
    animation: `$opacity 500ms`
  },
  "@keyframes mooveleft": {
    "0%": {
      right: "-50%",
      flex: 3
    },
    "100%": {
      right: "0%",
      flex: 1
    }
  },
  "@keyframes mooveright": {
    "0%": {
      right: "50%"
    },
    "100%": {
      right: "0%"
    }
  },
  "@keyframes mooveleftSmart": {
    "0%": {
      right: "-50%"
    },
    "100%": {
      right: "0%"
    }
  },
  "@keyframes mooverightSmart": {
    "0%": {
      right: "0%"
    },
    "100%": {
      right: "-50%"
    }
  },
  "@keyframes opacity": {
    "0%": {
      opacity:0
    },
    "100%": {
      opacity:100
    }
  },
});

export default App;
