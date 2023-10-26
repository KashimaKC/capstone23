import { Text, View, Dimensions, SafeAreaView, FlatList } from 'react-native'
import { useEffect, useState } from 'react';

import WelcomeCard from '../components/WelcomeCard';
import HomePageGraph from '../components/HomePageGraph';
import HomeLogPreview from '../components/HomeLogPreview';
import { getRecordCount } from '../functions/userhandler';
import { retrieveRecords } from '../functions/recordhandler';

import { homestyle } from '../styles/styles';

const HomePage = ({ navigation, route }) => {

    const username = route.params.username

    const [data, setData] = useState(undefined)
    const [recentLogs, setRecentLogs] = useState(undefined)

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await getRecordCount(username, '')

            setData(response)
        }

        const fetchRecentLogs = async () => {
            const response = await retrieveRecords(username)

            // grabs the last three recent logs
            setRecentLogs(response.slice(1).slice(-3))
        }

        fetchUserData()
            .catch(console.error)

        fetchRecentLogs()
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
            <SafeAreaView>
                <FlatList 
                    data={recentLogs}
                    renderItem={({item}) => <HomeLogPreview item={item} />}
                keyExtractor={item => item.time}
                />
            </SafeAreaView>
            <HomePageGraph data={data} />
        </View>
    )
}

export default HomePage