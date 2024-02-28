import React from 'react';
import { SafeAreaView, StatusBar, Text, View, StyleSheet  } from 'react-native';
import Constants from "expo-constants";
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';
//Note - using expo-constants on <SafeAreaView> component helps 
//our layout by applying padding at Android devices
//Note - using <SafeAreaView> component alone only 
//affects iOS devices not Android devices if we dont add expo-constants.
 

const CurrentWeather = ({ weatherData }) => {
  const {wrapper, description} = styles;

  //console.log(weatherData);
  const {main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
    <StatusBar />
      {/*
       <View style={{backgroundColor: "red"}}>
        <Text style={{color: "gray"}}>Inline Styling</Text>
       </View> 
      */}
      <View style={styles.container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={styles.temp}>{`${temp} %`}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}`}</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>{`High: ${temp_max} `}</Text>
          <Text style={styles.highLow}>{`Low: ${temp_min}`}</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>{weather[0]?.description}</Text>
        <Text style={styles.message}>{weatherType[weatherCondition]?.message}</Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Constants.statusBarHeight, //Android and iOS space at the top of the page
    flex: 1,
    //backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    color: "black",
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: "black"
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    color: "black",
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25
  }
}); 

 
export default CurrentWeather;



