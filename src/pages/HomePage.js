import { Text, View, Dimensions } from 'react-native'
import { useEffect, useState } from 'react';

import WelcomeCard from '../components/WelcomeCard';
import HomePageGraph from '../components/HomePageGraph';
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
            {/* <Header /> */}
            <WelcomeCard navigation={navigation} username={username} />
            <Text style={{alignSelf: 'center', fontSize: 20, padding: 10, color: 'white'}}>Log History</Text>
            <HomePageGraph data={data} />
        </View>
    )
}

export default HomePage