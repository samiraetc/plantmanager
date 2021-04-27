import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import colors from '../../assets/styles/colors';
import fontes from '../../assets/styles/fontes';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 56,
    },
    buttonTitle: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fontes.heading
    }
});