import * as React from 'react';

import ProjectCard from '../components/ProjectCard';

import { makeStyles } from '@material-ui/core/styles';
import Projects from '../constants/Projects';

export default function CV(params) {
    const classes = useStyles();
    let projects = [];
    let id = 0;
    for (let project of Object.keys(Projects)) {
        id++;
        let url = Projects[project].url;
        let title = Projects[project].title;
        let text = Projects[project].text;
        let git = Projects[project].git;
        let path = Projects[project].path;
        let photoFit = Projects[project].photoFit === undefined ? false : true;
        projects.push(<ProjectCard key={id} url={url} title={title} text={text} photoFit={photoFit} git={git} path={path}/>)
    }

    return(
        <div className={classes.container}> 
            {projects}
        </div>
    )


        

}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "90%",
        margin: "auto",
        justifyContent: "space-around",
    }
});