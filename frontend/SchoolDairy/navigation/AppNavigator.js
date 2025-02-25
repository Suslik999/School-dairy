import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import TeacherScreen from '../screens/TeacherScreen';
import StudentScreen from '../screens/StudentScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="RoleSelection">
      <Stack.Screen name="changerole" component={RoleSelectionScreen} />
      <Stack.Screen name="teacher" component={TeacherScreen} />
      <Stack.Screen name="student" component={StudentScreen} />
    </Stack.Navigator>
  );
}