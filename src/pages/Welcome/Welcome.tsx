import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from 'react-native';
import watering from '../../assets/watering.png';
import colors from '../../assets/styles/colors';
import { Entypo } from '@expo/vector-icons';
import fontes from '../../assets/styles/fontes';
import { useNavigation } from '@react-navigation/native';

export function Welcome() {

    const navigation = useNavigation();
    const handleStart = () => {
        navigation.navigate('UserIdentification')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Gerencie {'\n'} suas plantas de  {'\n'}forma fácil</Text>
                <Image source={watering} style={styles.image} resizeMode="contain" />
                <Text style={styles.subtitle}>Não esqueça mais de regar suas {'\n'}plantas.
            Nós cuidamos de lembrar você {'\n'} sempre que precisar.
            </Text>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Text ><Entypo name="chevron-right" style={styles.buttonIcon} /></Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fontes.heading,
        lineHeight: 34,
    },
    subtitle: {
        fontSize: 19,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.body_dark,
        fontFamily: fontes.text,
        lineHeight: 25
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 20,
        height: 56,
        width: 56,
        padding: 10,
        color: colors.white
    },
    buttonIcon: {
        fontSize: 30,
        color: colors.white,
        fontWeight: 'bold'
    },
    image: {
        height: Dimensions.get('window').width * 0.7,
    }
});