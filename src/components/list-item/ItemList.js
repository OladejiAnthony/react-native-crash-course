import React from "react"
import { Text, View, StyleSheet } from "react-native";
import {Feather} from "@expo/vector-icons"
import { weatherType } from "../../utilities/weatherType";
import moment from "moment";


const ItemList = (it) => {
    const {dt_txt, min, max, condition } = it; //we destructure the data properties.

    const {item, date, temp, dateTextWrapper} = styles; //We destructure our styles to make our code cleaner and easier 
                                       //to read, instead of the usual "styles.item", "styles.date"

    return (
      <View style={item}>
         <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
         <View style={styles.dateTextWrapper}>
         <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
            <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
         </View>
         <Text style={temp}>{`${Math.round(min)}/${Math.round(max)}`}</Text>
      </View>
     )
}

const styles = StyleSheet.create({
    item : {
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "indianred"
    },
    temp: {
        color: "white",
        fontSize: 20
    },
    date: {
        color: "white",
        fontSize: 12
    },
    dateTextWrapper: {
        flexDirection: "column"
    }
})

export default ItemList