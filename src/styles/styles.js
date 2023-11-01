import { StyleSheet } from "react-native";

const jet = '#3C3744'
const dukeblue = '#090C9B'
const byzantineblue = '#3D52D5'
const powderblue = '#B4C5E4'
const textcolor = '#FBFFF1'

const login = StyleSheet.create({
    loginContainer : {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    textFieldContainer : {
        backgroundColor: byzantineblue,
        height: 40,
        width: 300,
        borderRadius: 6,
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 5,
        marginBottom: 5
    },
    loginButton : {
        marginTop: 15,
        padding: 12,
        backgroundColor: dukeblue,
        color: textcolor,
        borderRadius: 6,
        paddingLeft: 40,
        paddingRight: 40
    }
})

const homestyle = StyleSheet.create({
    homeContainer : {
        display: 'flex',
        backgroundColor: byzantineblue,
        height: '100%',
        padding: 5
    },
    homeText : {
        color: textcolor
    }
})

const logpage = StyleSheet.create({
    headerNav : {
        backgroundColor: byzantineblue,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerBack : {
        backgroundColor: dukeblue,
        width: 120,
        padding: 10
    },
})

const cards = StyleSheet.create({
    welcomeCard : {
        backgroundColor: dukeblue,
        padding: 20,
        margin: 5,
        marginTop: 45,
        borderRadius: 5
    },
    cardText : {
        color: textcolor,
        alignSelf: 'center',
        fontSize: 22
    },
    welcomeCardNav : {
        marginTop: 30
    },
    navButton : (color) => ({
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: color == 'create' ? '#03fc90' : powderblue,
        padding: 10,
        margin: 2,
        width: 'auto',
        flexWrap: "nowrap",
        borderRadius: 5,
        flexGrow: 1
    }),
    navText : { 
        color: 'black',
        alignSelf: 'center'
    },
    settingsButton : {
        backgroundColor: jet,
        padding: 10,
        margin: 2,
        borderRadius: 5,
        marginTop: 10
    }
})

const logCard = StyleSheet.create({
    cardContainer : {
        backgroundColor: powderblue,
        margin: 5,
        padding: 10,
    },
    cardNav : {
        marginTop: 0,
        flexGrow: 1
    },
    card : (color) => ({
        margin: 2,
        padding: 8,
        backgroundColor: color == 'remove' ? 'red' : byzantineblue,
        borderRadius: 4,
        flexGrow: 1
    }),
    cardText : {
        fontSize: 16
    },
    ratingBar : (color) => ({
        height: 5,
        marginBottom: 10,
        backgroundColor: 
            color == 5 ? '#e04526' : 
            color == 4 ? '#fa7e48' :
            color == 3 ? '#ffb234' :
            color == 2 ? '#ffd934' :
            color == 1 ? '#add633' :
            color == 0 ? '#a0c15a' :
            dukeblue,
        borderRadius: 8
    })
})

const recordEntry = StyleSheet.create({
    recordPageContainer : {
        marginTop: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: byzantineblue,
        padding: 5,
        height: '100%'
    },
    title : {
        fontSize: 24,
        color: 'white',
        marginBottom: 20
    },
    ratingButton : (pressed, color) => ({ 
        backgroundColor: pressed ? 'black' : color,
        padding: 15, 
        margin: 5,
        width: 50,
        borderRadius: 8
    }),
    ratingButtonText : {
        color: 'black', 
        textAlign: 'center'
    },
    descriptionArea : { 
        backgroundColor: powderblue,
        height: 150,
        borderRadius: 2,
        padding: 10
    },
    logSubmissionButton : ( color ) => ({
        display: 'flex',
        backgroundColor: color,
        borderRadius: 6,
        padding: 15,
        flexDirection: 'row'
    })
})

export {
    homestyle, cards, login, recordEntry,
    logCard, logpage
}