import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, TouchableOpacityProps } from 'react-native';
import colors from '../../assets/styles/colors';
import fontes from '../../assets/styles/fontes';
import { Button } from '../../components/Button/Button';
import { ConfirmProps } from '../../libs/storage';

export default function Confirmation({route}: ConfirmProps) {
    const navigation = useNavigation();
    const { name } = route.params;

    const handlePlantSelect = () => {
        navigation.navigate('PlantSelect', {name: name})
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.emoji}>😁</Text>
                <Text style={styles.title}>Prontinho, {name}</Text>
                <Text style={styles.subtitle}> Agora vamos começar a cuidar das suas {'\n'} plantinhas com muito cuidado.
            </Text>

                <View style={styles.footer}>
                    <Button title="Começar"  onPress={handlePlantSelect}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 78,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 15,
        fontFamily: fontes.heading,
        lineHeight: 32,
    },
    subtitle: {
        fontSize: 19,
        textAlign: 'center',
        paddingVertical: 10,
        color: colors.body_dark,
        fontFamily: fontes.text,
    },
    footer: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 40,
    }
});
