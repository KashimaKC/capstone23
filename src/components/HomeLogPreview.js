import { View, Text } from "react-native"

import { logCard } from "../styles/styles"

const HomeLogPreview = ( { item } ) => {

    var date = new Date(item.time * 1000)

    return (
        <View style={logCard.cardContainer}>
            <Text>Time of record: {date.getMonth() + 1}/{date.getDate()} - {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Description: {item.description}</Text>
        </View>
    )
}

export default HomeLogPreview