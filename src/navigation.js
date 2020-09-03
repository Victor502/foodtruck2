import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from './components/map/Index';
import AccountStackNavigator from './components/account/AccountStackNavigator';
import HomeStackNavigator from './components/home/HomeStackNavigator';
import MapStackNavigator from './components/map/Index.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from './config/Theme.js';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Map" component={MapStackNavigator} />
        <Tab.Screen name="Account" component={AccountStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
