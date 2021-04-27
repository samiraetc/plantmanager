import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import profile from '../../assets/foto-perfil.jpeg';
import colors from '../../assets/styles/colors';
import fontes from '../../assets/styles/fontes';

interface EnvironmentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function EnvironmentButton({
    title,
    active = false,
    ...rest
}: EnvironmentButtonProps) {
    return (

            <RectButton style={[styles.container, active && styles.containerActive]}  {...rest}>
                <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
            </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        height: 40,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 8,
    },
    containerActive: {
        backgroundColor: colors.green_light
    },
    text: {
        color: colors.heading,
        fontFamily: fontes.text
    },
    textActive: {
        color: colors.green_dark,
        fontFamily: fontes.heading,

    },
});