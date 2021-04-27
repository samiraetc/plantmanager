import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../assets/styles/colors';
import fontes from '../../assets/styles/fontes';
import * as Svg from 'react-native-svg';


interface PlantProps extends RectButtonProps {
    data: {
        name: string,
        photo: string,
    }
}

export function PlantCardPrimary({ data, ...rest }: PlantProps) {
    return (
        <RectButton style={styles.container} {...rest}>
            <Svg.SvgFromUri
                uri={data.photo}
                width={80}
                height={80}
            />
            <Text style={styles.text} >{data.name}</Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '30%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10,
    },
    text: {
        color: colors.green_dark,
        fontFamily: fontes.heading,
        marginVertical: 16,
    }
});