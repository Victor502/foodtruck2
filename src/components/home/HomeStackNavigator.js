import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Index.js';
import TruckCard from './TruckCard';
import Theme from '../../style/Theme.js';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Food Trucks',
        }}
      />
      <Stack.Screen
        name="Truck"
        component={TruckCard}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
