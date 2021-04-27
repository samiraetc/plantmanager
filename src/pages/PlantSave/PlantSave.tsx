import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Platform, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import colors from '../../assets/styles/colors';
import fontes from '../../assets/styles/fontes';
import waterdrop from '../../assets/waterdrop.png';
import { Button } from '../../components/Button/Button';
import * as Svg from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/core';
import DatePicker, { Event } from '@react-native-community/datetimepicker'
import { format, isBefore } from 'date-fns';
import { PlantProps } from '../../libs/storage';

interface Params {
  plant: PlantProps
}

export function PlantSave() {
  const route = useRoute();
  const { plant } = route.params as Params;
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro! ⏰')
    }

    if (dateTime)
      setSelectedDateTime(dateTime);

  }

  const handleOpenDatePickerAndroid = () => {
    setShowDatePicker(oldState => !oldState);
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <Svg.SvgFromUri
            uri={plant.photo}
            height={150}
            width={150}
          />
          <Text style={styles.plantName}>
            {plant.name}
          </Text>

          <Text style={styles.plantAbout}>
            {plant.about}
          </Text>

        </View>
        <View style={styles.controller} >
          <View style={styles.tipContainer}>
            <Image source={waterdrop} style={styles.tipImage} />
            <Text style={styles.tipText}>
              {plant.water_tips}
            </Text>
          </View>

          <Text style={styles.alertLabel}>Escolha o melhor horario para ser lembrado.</Text>

          {showDatePicker && (
            <DatePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === 'android' && (
            <TouchableOpacity onPress={handleOpenDatePickerAndroid} style={styles.dateTimePickerButton}>
              <Text style={styles.dateTimePickerText}>
                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
            </Text>
            </TouchableOpacity>

          )}


          <Button title="Cadastrar planta" onPress={() => { }} />
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20
  },
  plantName: {
    fontFamily: fontes.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: fontes.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    bottom: 60
  },
  tipImage: {
    width: 56,
    height: 56
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fontes.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: 'justify'
  },
  dataTimePickerButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 40,
  },
  dataTimePickerText: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fontes.text
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: fontes.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5
  }, 
  dateTimePickerButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 40,
  }
  ,
  dateTimePickerText: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fontes.text
  }

});