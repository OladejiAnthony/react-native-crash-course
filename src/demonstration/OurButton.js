import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 

 
const OurButton = () => {
    const btnClick = () => {
        alert("btn clicked")
    }
    return (
        <TouchableOpacity style={styles.container} onPress={btnClick}>
            <Text style={styles.btnText}>Hello</Text>
        </TouchableOpacity>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        elevation: 8,
        backgroundColor: "blue",
        borderRadius: 10,
        padding: 5
    },
    btnText: {
        fontSize: 15,
        color: "white",
        alignSelf: "center",
        backgroundColor: "red",
        width: 80,
        textAlign: "center"
    }
});
 
export default  OurButton ;