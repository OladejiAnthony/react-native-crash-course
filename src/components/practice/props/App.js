import React from 'react';
import {StyleSheet, View  } from 'react-native';
//import CurrentWeather from './src/components/CurrentWeather';
import UpcomingWeather from './src/components/UpcomingWeather';
import OurChild from './src/components/practice/props/OurChild';

//import PracticeUpcoming from './src/components/practice/PracticeUpcoming';



const App = () => {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather />  */}
      {/* <UpcomingWeather />  */}
      {/* <PracticeUpcoming /> */}
      <OurChild message={"Hello"} />
      <OurChild message={"Greetings"} />
      <OurChild message={"Goodbye"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

 
export default App;


//45mins


