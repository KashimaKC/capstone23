import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

const Logs = ({ navigation, route }) => {

    const [data, setData] = useState(undefined)
    const username = route.params.username


    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Logs