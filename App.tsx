import React from 'react';
import { StyleSheet } from 'react-native';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_300Light
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts(
    {
      Jost_400Regular,
      Jost_600SemiBold,
      Jost_300Light
    }
  );

if(!fontsLoaded)
    return <AppLoading />

  return (
   <Routes />
  );
}

const styles = StyleSheet.create({
  
});
