import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import colors from '../../assets/styles/colors';

import profile from '../../assets/foto-perfil.jpeg';
import fontes from '../../assets/styles/fontes';

 export function Header(route: any) {
     const {name} = route.username;
     return (
         <View style={styles.container}>
             <View>
                 <Text style={styles.greeting}>Olá,</Text>
                 <Text style={styles.username}>{name}</Text>
             </View>
             <Image style={styles.image} source={profile}/>
         </View>
     )
 }

 const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 20,
      marginTop: getStatusBarHeight(),
    }, 
    image: {
        borderRadius: 50,
        height: 70,
        width: 70,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fontes.lines
    },
    username: {
        fontFamily:fontes.heading,
        fontSize:32,
        color: colors.heading,
        lineHeight: 40
    }
  });