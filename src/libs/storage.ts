import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns'
import { TouchableOpacityProps } from 'react-native';

export interface PlantProps {
  id: string,
  name: string,
  about: string,
  water_tips: string,
  photo: string,
  environments: [string],
  frequency: {
    times: number,
    repeat_every: string
  },
  dateTimeNotification: Date;
}

export interface EnviromentProps {
  key: string,
  title: string
}

export interface ConfirmProps extends TouchableOpacityProps {
  name: string;
  route: any;
}

interface StoragePlantProps {
  [id: string]: {
    data: PlantProps;
  }
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPlants = {
      [plant.id]: {
        data: plant
      }
    }

    await AsyncStorage.setItem('@plantmanager:plansts',
      JSON.stringify({
        ...newPlants,
        ...oldPlants
      }));


  } catch (err) {
    throw new Error(err);
  }
}