import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ImageBackground } from 'react-native';
import IconText from '../components/IconText/IconText';
import moment from 'moment';
 

const City = ({weatherData}) => {
    //destructuring styles props.
    const {container, cityName, cityText, countryName, populationWraper, rowLayout, riseSetWrapper} = styles;

    const {name, country, population, sunrise, sunset} = weatherData;

    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                source={require("../../assets/city.jpg")}
                style={styles.image}
            >
                <Text style={[cityName, cityText]}>
                    {name}
                </Text>
                <Text style={[countryName, cityText]}>
                    {country}
                </Text>
                <View style={populationWraper}>
                    <IconText  
                        iconName={"user"}
                        iconColor={"red"}
                        bodyText={`Population: ${population}`}
                    />    
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText  
                        iconName={"sunrise"}
                        iconColor={"white"}
                        bodyText={moment(sunrise).format('h:mm:ss a')}
                    />    
                    <IconText  
                        iconName={"sunset"}
                        iconColor={"white"}
                        bodyText={moment(sunset).format('h:mm:ss a')}
                    />    
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0
    },
    image: {
        flex: 1
    },
    cityName: {
       fontSize: 40,
    },
    countryName: {
        fontSize: 35,
    },
    cityText: {
        justifyContent:"center",
        alignSelf: "center",
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    populationWraper: {
        justifyContent: "center",
        marginTop: 30
    },
  
    rowLayout: {
        flexDirection: "row",
        alignItems: "center"
    },
    riseSetWrapper: {
        justifyContent: "space-around",
        marginTop: 30
    },
 
    
});
 
export default City;


//2hrs
