import React from 'react';
import { StatusBar, Text, StyleSheet, FlatList, SafeAreaView, ImageBackground} from 'react-native';
import ItemList from '../components/list-item/ItemList';
// import { DATA } from '../components/data/data';


const UpcomingWeather = ({weatherData}) => {
    const renderItem = ({item}) => (
        <ItemList
            condition={item.weather[0].main} 
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )

    //Note - if you want you can destructure your styling

    return (       
        <SafeAreaView style={styles.container}>
            <StatusBar />   
            <ImageBackground source={require("../../assets/clouds.jpg")}   
                style={styles.image}>

            <FlatList 
                data={weatherData}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt} 
            />
            {/*keyExtractor is used for components to have a unique id */}

            </ImageBackground>
        </SafeAreaView>
    );
} 

 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: StatusBar.currentHeight || 0, //Android and iOS space at the top of the page
        backgroundColor: "royalblue"
    },
    image: {
        flex: 1
    }

});

export default UpcomingWeather;

//1hr,19mins
