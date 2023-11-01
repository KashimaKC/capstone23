import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable } from 'react-native'
import LogCard from '../components/LogCard'
import { logpage } from '../styles/styles'

import { retrieveRecords } from '../functions/recordhandler'
import { Ionicons } from '@expo/vector-icons'

const Logs = ({ navigation, route }) => {

    const [data, setData] = useState(undefined)
    
    const username = route.params.username

    useEffect(() => {
        const fetchLogData = async () => {
            const response = await retrieveRecords(username)

            setData(response)
        }

        fetchLogData()
            .catch(console.error)

    }, [route.params])

    return (
        <SafeAreaView style={{marginTop: 45}}>
            <View style={logpage.headerNav}>
                <Pressable 
                    onPress={() => navigation.navigate('Home', { username: username})}
                    style={logpage.headerBack}
                >   
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="caret-back-outline" style={{fontSize: 22, color: 'white', marginRight: 10}}/>
                        <Text style={{color: 'white', alignSelf: 'center'}}>Back</Text>
                    </View>
                </Pressable>
                <Text style={{color: 'white', fontSize: 22, alignSelf: 'center', marginRight: 15}}>Log View</Text>
            </View>
            <FlatList 
                data={data?.reverse()}
                renderItem={({item}) => <LogCard item={item} navigation={navigation} username={username} />}
                keyExtractor={item => item.time}
            />

        </SafeAreaView>
    )
}

export default Logs