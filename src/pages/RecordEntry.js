import { View, Text, Pressable, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native"
import { useState } from "react"
import { createRecord } from "../functions/recordhandler"
import Ionicons from "@expo/vector-icons/Ionicons"
import { recordEntry } from "../styles/styles"


const RecordEntry = ( { navigation, route } ) => {

    const [ rating, setRating ] = useState(0)
    const [ description, setDescription ] = useState('')

    const username = route.params.username

    const handleRecordSubmission = async (description, rating) => {
        try {
            const response = await createRecord(description, rating, username)

            if ( response === 200 ) {
                navigation.navigate('Home', { username: username })
            } else {
                Alert.alert("Error creating record. Please try again.")
            }
        } catch ( error ) {
            console.error(error)
        }
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={recordEntry.recordPageContainer}>
                <View style={{marginTop: '50%'}}>
                    <Text style={recordEntry.title}>Create New Record</Text>

                    <Text style={{color: 'white', fontSize: 18}}>Select Pain Level:</Text>
                    <View style={{display: 'flex', flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
                        <Pressable 
                            onPress={() => setRating(0)} 
                            style={({pressed}) => recordEntry.ratingButton(pressed, '#a0c15a')}
                        >
                            <Text style={recordEntry.ratingButtonText}>0</Text>
                        </Pressable>

                        <Pressable 
                            onPress={() => setRating(1)} 
                            style={({pressed}) => recordEntry.ratingButton(pressed, '#add633')}
                        >
                            <Text style={recordEntry.ratingButtonText}>1</Text>
                        </Pressable>

                        <Pressable 
                            onPress={() => setRating(2)} 
                            style={({pressed}) => recordEntry.ratingButton(pressed, '#ffd934')}  
                        >
                            <Text style={recordEntry.ratingButtonText}>2</Text>
                        </Pressable>

                        <Pressable 
                            onPress={() => setRating(3)} 
                            style={({pressed}) => recordEntry.ratingButton(pressed, '#ffb234')}  
                        >
                            <Text style={recordEntry.ratingButtonText}>3</Text>
                        </Pressable>

                        <Pressable 
                            onPress={() => setRating(4)} 
                            style={({pressed}) => recordEntry.ratingButton(pressed, '#fa7e48')}  
                        >
                            <Text style={recordEntry.ratingButtonText}>4</Text>
                        </Pressable>

                        <Pressable 
                            onPress={() => setRating(5)} 
                            style={({pressed}) => recordEntry.ratingButton(pressed, '#e04526')}  
                        >
                            <Text style={recordEntry.ratingButtonText}>5</Text>
                        </Pressable>

                    </View>
                    <Text style={{color: 'black', marginBottom: 25}}>Pain Level Selected: {rating} </Text>

                    <Text style={{fontSize: 18, color: 'white'}}>Record Description:</Text>
                    <SafeAreaView style={{marginTop: 15}}>
                        <TextInput 
                            multiline
                            editable
                            textAlign="center"
                            style={recordEntry.descriptionArea}
                            onChangeText={setDescription}
                            value={description}
                        >
                        </TextInput>
                    </SafeAreaView>

                    <View style={{marginTop: 15, marginBottom: 15}}>
                        <Pressable style={recordEntry.logSubmissionButton('#99cc33')} onPress={() => handleRecordSubmission(description, rating)}>
                            <Ionicons name="save-outline" size={18} style={{marginRight: 10}}/>
                            <Text style={{color: 'black'}}>Submit Log Entry</Text>
                        </Pressable>
                    </View>
                    <View style={{marginBottom: 15}}>
                        <Pressable style={recordEntry.logSubmissionButton('#ff4545')} onPress={() => navigation.navigate('Home', {username: username})}>
                            <Ionicons name="trash-outline" size={18} style={{marginRight: 10}}/>
                            <Text style={{color: 'black'}}>Discard Entry</Text>
                        </Pressable>
                    </View>
                </View> 
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RecordEntry