import React from 'react';

import Styles from './constants/Styles'
import Colors from './constants/Colors'

import {Avatar,Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, LinkedIn } from '@material-ui/icons';

import Accueil from './screens/Accueil';
import CV from './screens/CV';
import Contact from './screens/Contact';
import Projet from './screens/Projet';
import './App.css';

import avatar from './img/avatar.jpg';

function App() {

  const [selected,setSelected] = React.useState("mes projets");
  const classes = useStyles();
  const rubriques = ['accueil','mon cv','mes projets','contact'];

  return (

    <div className={classes.app} style={selected!=="accueil" ? null : {flexDirection:'row-reverse'}}>

      <div className={classes.navigation}>
        {renderNav()}
      </div>

      <div className={selected!=="accueil" ? classes.screen : classes.home}>
        
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

  function renderComponent(){
    switch (selected) {
      case "accueil":
        return (<Accueil changeRubrique={changeRubrique} />)
        break;
      
      case "mon cv":
        return (<CV />)

      case "contact":
        return (<Contact />)

      case "mes projets":
        return (<Projet />)
        
      default:
        break;
    }
  }

  function changeRubrique(rubrique){
    setSelected(rubrique)
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
    boxShadow: "#0000007d 0px 0px 8px"
  },
  home : {
    flex : 1,
    minHeight: "100vh",
    maxHeight : '100vh',
    overflow : "auto"
  },
  screen : {
    flex : 3,
    minHeight: "100vh",
    maxHeight : '100vh',
    overflow : "auto",
    backgroundColor: Colors.background
  },
  myname : {
    fontWeight: 700,
    fontSize: 22
  },
  active : {
    color : Colors.blue
  }
});

export default App;
