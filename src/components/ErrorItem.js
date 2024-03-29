import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Feather} from "@expo/vector-icons"


export default function ErrorItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>
        Sorry something went wrong
      </Text>
      <Feather name='frown' size={100} color={'white'}  />
    </View>
  )

  
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: "center"
    },
    errorMessage: {
        fontSize: 30,
        color: "white",
        marginHorizontal: "10",
        textAlign: 'center'
    }
  })

