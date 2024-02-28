import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from "@env"


export const useGetWeather = () => {
    const [isLoading, setIsLoading] = useState(true);
    //GeoLocation
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    //console.log(WEATHER_API_KEY)
    //Data Fetching
    const [weather, setWeather] = useState([])
  
  
    const fetchWeatherData = async () => {
      try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)
        const data = await res.json()
        setWeather(data);
      } catch{errorMsg} {
        setErrorMsg('Could not fetch weather')
      } 
      setIsLoading(false);
         
    }

      useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync()
    
          if (status !== 'granted') {
            setErrorMsg('permission to access location was denied')
            return
          }
          let location = await Location.getCurrentPositionAsync({})
          setLat(location.coords.latitude)
          setLong(location.coords.longitude)
          await fetchWeatherData()
        })()
      }, [lat, long])
 

      return [isLoading, errorMsg, weather ]

 
}

//4hrs,10mins
