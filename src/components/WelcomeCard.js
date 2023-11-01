import { View, Text, Button, Pressable } from "react-native"
import { cards } from "../styles/styles"
import Ionicons from "@expo/vector-icons/Ionicons"

const WelcomeCard = ( { navigation, username } ) => {
    return (
        <View style={cards.welcomeCard}>
            <Text style={cards.cardText}> Welcome, {username}! </Text>
            <View style={cards.welcomeCardNav}>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Pressable onPress={() => navigation.navigate("RecordEntry", { username: username })}
                        style={cards.navButton('create')}
                    >
                        <Ionicons name="medkit-outline" style={{ fontSize: 15, marginRight: 10}}/>
                        <Text style={cards.navText}>Create a new log</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Logs", { username: username})}
                        style={cards.navButton('view')}
                    >
                        <Ionicons name="file-tray-full-outline" style={{fontSize: 15, marginRight: 10}}/>
                        <Text style={cards.navText}>View Logs</Text>
                    </Pressable>
                </View>

                <View>
                    <Pressable onPress={() => navigation.navigate('Settings')}
                        style={cards.settingsButton}
                    >   
                        <Text style={{alignSelf: 'center', color: 'white'}}>Settings</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default WelcomeCard



{/* 
    <View style={{display: 'flex', flexDirection: 'row'}}>
        <Pressable onPress={() => navigation.navigate("RecordEntry", { username: username })}>
            <Text style={[cards.navButton, {}]}>Create New Log</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Logs", { username: username})}>
            <Text style={[cards.navButton, {width: 125}]}>View Logs</Text>
        </Pressable>
    </View>
    <Pressable onPress={() => navigation.navigate('Settings')}>
        <Text style={cards.navButton}>Settings</Text>
    </Pressable> 
*/}