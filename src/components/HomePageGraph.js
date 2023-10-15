import { Text, View, Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit"


const HomePageGraph = ( { data }) => {
    return (
        <View>
            <LineChart
                data={{
                labels: [
                    `${data[0].month}/${data[0].day}`, 
                    `${data[1].month}/${data[1].day}`, 
                    `${data[2].month}/${data[2].day}`, 
                    `${data[3].month}/${data[3].day}`, 
                    `${data[4].month}/${data[4].day}`, 
                    `${data[5].month}/${data[5].day}`, 
                    `${data[6].month}/${data[6].day}`
                ],
                datasets: [
                    {
                        data: [
                            data[0].records,
                            data[1].records,
                            data[2].records,
                            data[3].records,
                            data[4].records,
                            data[5].records,
                            data[6].records,
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