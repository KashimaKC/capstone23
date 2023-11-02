import { View, Text, Pressable, Alert } from "react-native"
import { logCard } from "../styles/styles"
import { Ionicons } from "@expo/vector-icons"
import { removeRecord } from "../functions/recordhandler"

const LogCard = ( { item, navigation, username } ) => {

    var date = new Date(item.time * 1000)

    const promptDelete = ( time ) => {
        Alert.alert(
            'Remove Record?', 
            'Are you sure you would like to remove this record? This action cannot be undone.',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancelled')
                },
                {
                    text: 'Delete',
                    onPress: () => deleteRecord(time)
                }
            ]
        )
    }

    const deleteRecord = ( time ) => {
        removeRecord(username, time)
        Alert.alert("Removed the record!")
        navigation.navigate("Logs", { username: username})
    }

    return (
        <View style={logCard.cardContainer}>
            <View style={logCard.ratingBar(item.rating)}></View>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: '75%'}}>
                    <Text style={logCard.cardText}>Time of record: {date.getMonth() + 1}/{date.getDate()} - {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</Text>
                    <Text style={logCard.cardText}>Rating: {item.rating}</Text>
                    <Text style={logCard.cardText}>Description: {item.description}</Text>
                </View>
                <View style={logCard.cardNav}>
                    <Pressable
                        onPress={() => promptDelete(item.time)}
                        style={[logCard.card('remove')]}
                    >
                        <Text style={{fontSize: 16, color: 'white'}}>Remove</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => console.log("editing item")}
                        style={logCard.card}
                    >
                        <Text style={{fontSize: 16, color: 'white'}}>Edit</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default LogCard