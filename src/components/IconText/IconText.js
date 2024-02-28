import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Feather} from "@expo/vector-icons"
 

 
const IconText = ({iconName, iconColor, bodyText}) => {

    return (
        <View style={styles.container}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[styles.textTheme]}>
                {bodyText}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    textTheme: {
        fontWeight: "bold",
        color: "red",
        fontSize: 20
    }
});

 
export default IconText;