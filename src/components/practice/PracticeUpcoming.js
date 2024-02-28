import React from 'react';
import {SafeAreaView, StatusBar, View, Text, StyleSheet, FlatList } from 'react-native';
import Constants from "expo-constants";
import {Feather} from "@expo/vector-icons"

 
const DATA = [ 
    {
        dt_txt: "2024-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2024-02-18 15:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 18:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    },
    
]

const ItemList = (i) => {
    const {dt_txt, min, max, condition } = i;
    return (
      <View>
         <Feather name={'sun'} size={50} color={'white'} />
         <Text>{dt_txt}</Text>
         <Text>{min}</Text>
         <Text>{max}</Text>
      </View>
     )
}

const Empty = () => (
    <View>
        <Text style={{fontSize: 60}}>Empty</Text>
    </View>
)

const Header = () => (
    <View>
        <Text>Header Item Testing</Text>
    </View>
)

const PracticeUpcoming = () => {

    //destructuring styles and passing it as props.
    const {saveAreaStyle, container} = styles;
   
    return (
        <SafeAreaView style={saveAreaStyle}>
            <StatusBar />
            <View style={container}>
                <Text>Upcoming Weather</Text>
                <FlatList 
                    data={DATA}
                    renderItem={({item}) => {
                        return (
                            <ItemList 
                                condition={item.weather[0].main} 
                                dt_txt={item.dt_txt}
                                min={item.main.temp_min}
                                max={item.main.temp_max}
                            />
                        )
                    }}

                    keyExtractor={(item) => item.id} 
                    ItemSeparatorComponent={() => <View style={{backgroundColor: "green", height: 2}} />}
                    ListEmptyComponent={<Empty /> }
                    ListHeaderComponent={<Header />}
                />
                {/*keyExtractor is used for components to have a unique id */}
            </View>

        </SafeAreaView>
    );
}

 
const styles = StyleSheet.create({
    saveAreaStyle: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "pink",
      },
    container: {
        flex: 1
    }
});

export default PracticeUpcoming;

