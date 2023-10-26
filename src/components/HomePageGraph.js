import { Text, View, Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit"


const HomePageGraph = ( { data }) => {

    let keys = []
    let count = []

    for (let x in data) {
        keys.push(x)
        count.push(data[x])
    }

    return (
        <View>
            <LineChart
                data={{
                labels: [
                    keys[0],
                    keys[1],
                    keys[2],
                    keys[3],
                    keys[4],
                    keys[5],
                    keys[6],
                ],
                datasets: [
                    {
                        data: [
                            count[0],
                            count[1],
                            count[2],
                            count[3],
                            count[4],
                            count[5],
                            count[6],
                        ]
                    }
                ]
                }}
                width={Dimensions.get("window").width - 10}
                height={220}
                yAxisInterval={1}
                chartConfig={{
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 6
                },
                propsForDots: {
                    r: "4",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 6
                }}
                segments={2}
            />
        </View>
    )
}

export default HomePageGraph