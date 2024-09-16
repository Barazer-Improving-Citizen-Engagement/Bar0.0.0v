// navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../app/home';
import Kamukunji from '../app/kamukunji';
import Visualizer from '../app/visualizer';
import Profile from '../app/profile';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Tab.Screen name="Kamukunji" component={Kamukunji} options={{ title: 'Kamukunji' }} />
      <Tab.Screen name="Visualizer" component={Visualizer} options={{ title: 'Visualizer' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}
