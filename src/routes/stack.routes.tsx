import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../assets/styles/colors';

import { Welcome } from '../pages/Welcome/Welcome';
import UserIdentification from '../pages/UserIdentification/UserIdentification';
import Confirmation from '../pages/Confirmation/Confirmation';
import { PlantSelect } from '../pages/PlantSelect/PlantSelect';
import { PlantSave } from '../pages/PlantSave/PlantSave';

const stackRoutes = createStackNavigator();

const AppRoute: React.FC = () => (
    <stackRoutes.Navigator headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}>

        <stackRoutes.Screen name="Welcome" component={Welcome} />
        <stackRoutes.Screen name="UserIdentification" component={UserIdentification} />
        <stackRoutes.Screen name="Confirmation" component={Confirmation} />
        <stackRoutes.Screen name="PlantSelect" component={PlantSelect} />
        <stackRoutes.Screen name="PlantSave" component={PlantSave} />
    </stackRoutes.Navigator>
)


export default AppRoute;