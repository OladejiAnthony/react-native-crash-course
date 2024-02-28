import React from 'react';
import {ActivityIndicator, StyleSheet, View} from "react-native"
import { useGetWeather } from './src/hooks/useGetWeather';

import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/tabs/Tabs';
import ErrorItem from './src/components/ErrorItem';


const App = () => {
 const [isLoading, errorMsg, weather ] = useGetWeather()
 //console.log(isLoading, errorMsg, weather )

 if(weather && weather.list ) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
 }

  //loading state
    return (
      <View style={styles.container}>
        {errorMsg
          ? (<ErrorItem />) 
          : (<ActivityIndicator size={'large'} color={'blue'} />)
        }
      </View>
    ) 

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App;




