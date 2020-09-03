import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './Index.js';
// import TruckCard from './TruckCard';
import Theme from '../../config/Theme.js';

const Stack = createStackNavigator();

const MapStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Map"
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.colors.carrotOrange,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Food Trucks Map',
        }}
      />
      {/* <Stack.Screen
        name="Truck"
        component={TruckCard}
        options={{
          title: '',
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default MapStackNavigator;
