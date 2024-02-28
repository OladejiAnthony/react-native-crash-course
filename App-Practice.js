import React from 'react';
//import {StyleSheet, View} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UpcomingWeather from './src/screens/UpcomingWeather';
import CurrentWeather from './src/screens/CurrentWeather';
import City from './src/screens/City';
//import PracticeUpcoming from "./src/components/practice/PracticeUpcoming"


import {NavigationContainer} from '@react-navigation/native';
import { Feather } from "@expo/vector-icons"
//import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
          screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        }}
      > 
        <Tab.Screen 
          name={"Current"} 
          component={CurrentWeather} 
          options={{
            tabBarIcon: ({ focused} ) => (
              <Feather   
                name={'droplet'} 
                size={25} 
                color={focused  ? 'tomato' : 'black'} 
              />
            )}} 
        /> 
        <Tab.Screen 
          name={"Upcoming"} 
          component={UpcomingWeather}  
          options={{
            tabBarIcon: ({ focused} ) => (
              <Feather   
                name={'clock'} 
                size={25} 
                color={focused  ? 'tomato' : 'black'} 
              />
            )}} 
        />
        <Tab.Screen 
          name={"City"} 
          component={City} 
          options={{
            tabBarIcon: ({ focused} ) => (
              <Feather   
                name={'home'} 
                size={25} 
                color={focused  ? 'tomato' : 'black'} 
              />
            )}} 
        />

    </Tab.Navigator>

    {/* <Stack.Navigator>
      //How to use Stack Navigator
      <Stack.Screen name="Current" component={CurrentWeather} options={{title: "Current Weather"}} />
      <Stack.Screen name="Upcoming" component={UpcomingWeather} options={{title: "Upcoming Weather"}} />
      <Stack.Screen name="City" component={City} options={{title: "City"}} />
    </Stack.Navigator> */}
    {/* 
        //Firstly Built
        <View style={styles.container}>
          <CurrentWeather /> 
          <UpcomingWeather />  
          <City /> 
          <PracticeUpcoming /> 
        </View> 
    */}
    </NavigationContainer>
  );
}

export default App;


//2hrs,38mins


