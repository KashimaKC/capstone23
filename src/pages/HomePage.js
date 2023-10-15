import { Text, View, Dimensions } from 'react-native'
import { useEffect, useState } from 'react';

import Header from '../components/Header'
import WelcomeCard from '../components/WelcomeCard';
import HomePageGraph from '../components/HomePageGraph';
import { LineChart } from "react-native-chart-kit"
import { getRecordCount } from '../functions/userhandler';

import { homestyle } from '../styles/styles';

const HomePage = ({ navigation, route }) => {

    const username = route.params.username

    const [data, setData] = useState(undefined)

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await getRecordCount(username, '')

            setData(response)
        }

        fetchUserData()
            .catch(console.error)

    }, [route.params])

    if (data === undefined) {
        return(
            <View>
                <Text>Loading</Text>
            </View>
        )
    }

    return (
        <View style={homestyle.homeContainer}>
            <Header />
            <WelcomeCard navigation={navigation} username={username} />
            <Text>Default graph length is seven days. Please visit the settings to change.</Text>
            <HomePageGraph data={data} />
        </View>
    )
}

export default HomePage