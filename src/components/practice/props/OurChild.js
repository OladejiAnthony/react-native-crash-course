import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
 
//Props usage and Practice
 
const OurChild = ({message}) => {
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View>
                <Text style={{fontSize: 50}}>
                    {message}
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        paddingTop: StatusBar.currentHeight || 0, //Android and iOS space at the top of the page
    }
});

 
export default OurChild ;