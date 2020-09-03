import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import FavTruckCard from './FavTruckCard';
import Theme from '../../config/Theme.js';

const Stack = createStackNavigator();

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
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
        name="Profile"
        component={ProfileScreen}
        options={{title: 'My Profile'}}
      />
      <Stack.Screen
        name="FavTruck"
        component={FavTruckCard}
        options={{title: "My Fav's"}}
      />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
