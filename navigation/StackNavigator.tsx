// navigation/StackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../app/(tabs)/landing';
import SignUpPage from '../app/(tabs)/auth';
import TabNavigator from './TabNavigator'; // Your Tab Navigator
import NotFoundScreen from '../app/not-found'; // Handle unknown routes

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
      {/* Define all the routes */}
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="HomeTabs" component={TabNavigator} />

      {/* Fallback for undefined routes */}
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
