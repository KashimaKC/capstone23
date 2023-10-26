import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'

import { retrieveRecords } from '../functions/recordhandler'

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
            <FlatList 
                data={data}
                renderItem={({item}) => 
                <>
                    <Text>{item.time}</Text>
                </>
            }
            keyExtractor={item => item.time}
            />

        </SafeAreaView>
    )
}

export default Logs