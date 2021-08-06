import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationApp } from './src/navigation/NavigationApp'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'

export default function App() {

  let [fontsLoaded] = useFonts({
    'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  
  if (!fontsLoaded) {
    return <ActivityIndicator style={styles.activity} size="large" color="#009fe3"><AppLoading /></ActivityIndicator>
  } else {
    return (
      <NavigationApp />
    )
  }
}

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    justifyContent: 'center',
  },
})

