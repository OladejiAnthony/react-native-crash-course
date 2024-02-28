import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
//Ue this to practice props for CurrentWeather component

 
const RowText = ({message1, message2, containerStyles, message1Styles, message2Styles}) => {
   

    return (
        <View style={containerStyles}>
          <Text style={message1Styles}>{message1}</Text>
          <Text style={message2Styles}>{message2}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
export default RowText;