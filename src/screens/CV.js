import * as React from 'react';
import Step from '../components/Step';
import {ReactComponent as SchoolLogo} from '../img/school.svg';
import {ReactComponent as WorkLogo} from '../img/work.svg';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../constants/Colors';
import Texts from '../constants/Text';

export default function CV(params) {
    const classes = useStyles();

    return(
        <div className={classes.cvContainer}>
            <div className={classes.divText}> CV </div>
            
            <div className={classes.divContenu}>
                <div className={classes.contenu}>
                    <div className={classes.title}>
                        <SchoolLogo className={classes.svg} />
                    <p className={classes.mr0}> FORMATION </p>
                    </div>
                    <Step year="2016 - 2019" name="Master 2 Sciences-Cognitives et Médias Numériques" place="IDMC, Nancy (54)" />
                    <Step year="2014 - 2016" name="Licence Maths - Info" place="UFR Maths - Info, Nancy (54)" />
                    <Step year="2012 - 2014" name="DUT Informatique" place="IUT Charlemagne, Nancy (54)" />
                </div>
                <div className={classes.contenu}>
                <div className={classes.title}>
                        <WorkLogo className={classes.svg} />
                        <p className={classes.mr0}> EXPERIENCE PRO. </p>
                    </div>
                    <Step year="Décembre 2019 - Aujourd'hui" name="Altran - Ingénieur Consultant" place={Texts.altran} />
                    <Step year="Mars 2019 - Décembre 2019" name="BigInt - UX Designer/Développeur" place={Texts.bigInt} />
                    <Step year="Septembre 2017 - Août 2018" name="Orange - Consultant BI" place={Texts.orange} />
                    <Step year="Juin 2016 - Août 2016" name="Atelier iGloo - Consultant CRM" place={Texts.igloo} />
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    cvContainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: Colors.white,
        minHeight: "100vh",
        width: "85%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 45,
        marginBottom: 45,
        padding: "0px 15px",
        boxShadow: "#0000007d 0px 0px 8px"
    },
    title: {
        fontSize: 23,
        fontWeight: 600,
        display: "flex",
        margin: 0,
        alignItems: "center",
        paddingBottom: 10
    },
    divText: {
        fontSize: 45,
        fontWeight: 600,
        paddingTop: 20,
        borderBottom: "1px ridge #7f7f7f"
    },
    divContenu: {
        display: "flex",
        flexFlow: "wrap"
    },
    contenu: {
        flex: 1,
        padding: '0px 15px 0px 0px',
        marginTop: 30,
        minWidth: 249
    },
    saumon: {
        backgroundColor: Colors.saumon,
        width : 50,
        height : 50
    },
    mr0: {
        margin: 0,
        padding: "0px 15px",

    },
    svg: {
        width: 40,
        height: 40
    }
});