import { View, Text, Pressable, SafeAreaView, TextInput } from "react-native"
import { useState } from "react"
import { createRecord } from "../functions/recordhandler"

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
        <View style={recordEntry.recordPageContainer}>
            <Text style={recordEntry.title}>Create New Record</Text>

            <View style={{display: 'flex', flexDirection: 'row', marginTop: 15}}>
                <Pressable onPress={() => setRating(0)} style={recordEntry.ratingButton}  >
                    <Text style={recordEntry.ratingButtonText}>0</Text>
                </Pressable>

                <Pressable onPress={() => setRating(1)} style={recordEntry.ratingButton}  >
                    <Text style={recordEntry.ratingButtonText}>1</Text>
                </Pressable>

                <Pressable onPress={() => setRating(2)} style={recordEntry.ratingButton}  >
                    <Text style={recordEntry.ratingButtonText}>2</Text>
                </Pressable>

                <Pressable onPress={() => setRating(3)} style={recordEntry.ratingButton}  >
                    <Text style={recordEntry.ratingButtonText}>3</Text>
                </Pressable>

                <Pressable onPress={() => setRating(4)} style={recordEntry.ratingButton}  >
                    <Text style={recordEntry.ratingButtonText}>4</Text>
                </Pressable>

                <Pressable onPress={() => setRating(5)} style={recordEntry.ratingButton}  >
                    <Text style={recordEntry.ratingButtonText}>5</Text>
                </Pressable>

            </View>

            <SafeAreaView style={{marginTop: 15}}>
                <Text style={{fontSize: 16, color: 'white'}}> Record Description:</Text>
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
                <Pressable style={recordEntry.logSubmissionButton} onPress={() => handleRecordSubmission(description, rating)}>
                    <Text style={{color: 'white'}}>Submit Log Entry</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default RecordEntry