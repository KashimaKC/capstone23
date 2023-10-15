import { View, Text, Button, Pressable } from "react-native"
import { cards } from "../styles/styles"


const WelcomeCard = ( { navigation, username } ) => {
    return (
        <View style={cards.welcomeCard}>
            <Text style={cards.cardText}> Welcome, {username}! </Text>
            <View style={cards.welcomeCardNav}>
                <Pressable onPress={() => navigation.navigate("RecordEntry", { username: username })}>
                    <Text style={cards.navButton}>Create New Log</Text>
                </Pressable>
                <Pressable onPress={() => console.log("view logs")}>
                    <Text style={cards.navButton}>View Logs</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Settings')}>
                    <Text style={cards.navButton}>Settings</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default WelcomeCard