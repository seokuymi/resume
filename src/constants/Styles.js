import Colors from './Colors'

export default {
    icon: {
        margin: 5,
        '&:hover':{
            color: Colors.blue
        }
    },
    rubrique: { 
        fontWeight: 500,
        padding: '1.5px 0px',
        fontSize: 19,  
        textTransform : "uppercase",
        margin: 0,
        cursor: "pointer"
    },
    mt30: {
        marginTop : 30
    },
    pt50: {
        paddingTop : 50
    },
    gauchpoint: {
        fontSize: 20,
        fontWeight: 500
    },
    droitepoint: {
        fontSize: 16
    },
    buttonsAlign: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    buttonsO: {
        color: Colors.white,
        border: `solid 2px ${Colors.white}`,
        '&:hover' : {
            backgroundColor : Colors.white,
            color: Colors.blue
        }
    }
};