import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import colors from '../../assets/styles/colors';
import fontes from '../../assets/styles/fontes';
import { Button } from '../../components/Button/Button';

export default function UserIdentification() {
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>('');

    const handleConfirmation = (name : string) => {
        if (!name) 
            return Alert.alert('Me diz como chamar você 😢')
        navigation.navigate('Confirmation', {name: name});
    }

    const handleInputBlur = () => {
        setIsFocused(false);
        setIsFilled(!!name);
    }
    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const handleInputChange = (value: string) => {
        setIsFilled(!!value);
        setName(value);
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={styles.wrapper}>
                    <View style={styles.form}>
                        <Text style={styles.emoji}>{ isFilled ?  '😄' : '😀' }</Text>
                        <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
                        <TextInput 
                        style={[styles.input, (isFocused || isFilled) && {borderColor: colors.green}]} 
                        placeholder="Digite um nome"
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                        />
                        <View style={styles.footer}>
                            <Button title="Confirmar" onPress={() => handleConfirmation(name)} />
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView>
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
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        width: '100%',
    },
    emoji: {
        fontSize: 44,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 20,
        fontFamily: fontes.heading,
        lineHeight: 32,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20,
    }
});
