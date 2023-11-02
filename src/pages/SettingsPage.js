import { View, Text, Pressable } from "react-native"
import { settings, logpage } from "../styles/styles"
import { Ionicons } from "@expo/vector-icons"

const SettingsPage = ({ navigation, route }) => {

    const username = route.params.username

    return (
        <View style={settings.settingsPage}>
            <View style={settings.settingsContainer}>
                <Pressable 
                    onPress={() => navigation.navigate('Home', { username: username})}
                    style={logpage.headerBack}
                >   
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="caret-back-outline" style={{fontSize: 22, color: 'white', marginRight: 10}}/>
                        <Text style={{color: 'white', alignSelf: 'center', fontSize: 18}}>Back</Text>
                    </View>
                </Pressable>
                <Text style={{color: 'white', fontSize: 22, alignSelf: 'center', marginRight: 15}}>Settings</Text>
            </View>
            <Pressable onPress={() => console.log('prompt removal')}
                style={{backgroundColor: 'red', padding: 10}}
            >
                <Text style={{fontSize: 16}}>Remove All Records</Text>
            </Pressable>
        </View>
    )
}

export default SettingsPage