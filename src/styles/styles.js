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
        marginTop: 30
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
        backgroundColor: jet,
        height: '100%',
        padding: 5
    },
    homeText : {
        color: textcolor
    }
})

const cards = StyleSheet.create({
    welcomeCard : {
        backgroundColor: byzantineblue,
        display: 'flex',
        width: '100%',
        height: 200,
        borderRadius: 6,
    },
    cardText : {
        color: textcolor,
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 18
    },
    welcomeCardNav : {
        backgroundColor: textcolor,
        height: 140,
        margin: 5,
        display: 'flex',
        borderRadius: 6,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    navButton : {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: dukeblue,
        color: 'white',
        padding: 12,
        borderRadius: 6,
        width: '99%'
    }
})

const recordEntry = StyleSheet.create({
    recordPageContainer : {
        marginTop: 23,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: byzantineblue,
        padding: 5
    },
    title : {
        fontSize: 20,
        color: 'white'
    },
    ratingButton : { 
        backgroundColor: 'black',
        padding: 10, 
        margin: 5,
        width: 50,
        borderRadius: 8
    },
    ratingButtonText : {
        color: 'white', 
        textAlign: 'center'
    },
    descriptionArea : { 
        backgroundColor: powderblue,
        height: 150,
        width: 350,
        borderRadius: 2,
        padding: 10
    },
    logSubmissionButton : {
        backgroundColor: jet,
        borderRadius: 6,
        padding: 15,
    }
})

export {
    homestyle, cards, login, recordEntry
}