import { View, Text, Pressable, Alert } from "react-native"
import { logCard } from "../styles/styles"
import { Ionicons } from "@expo/vector-icons"
import { removeRecord } from "../functions/recordhandler"

const LogCard = ( { item, navigation, username } ) => {

    var date = new Date(item.time * 1000)


    const deleteRecord = ( time ) => {
        Alert.alert("removed the record!")
        removeRecord(username, time)
        navigation.navigate("Logs", { username: username})
    }

    return (
        <View style={logCard.cardContainer}>
            <Text>Time of record: {date.getMonth() + 1}/{date.getDate()} - {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Description: {item.description}</Text>
            <Pressable 
                onPress={() => deleteRecord(item.time)} 
                style={{backgroundColor: 'grey'}}
            >
                <Text style={{fontSize: 18}}>Remove Log</Text>
            </Pressable>
        </View>
    )
}

export default LogCard