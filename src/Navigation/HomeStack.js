import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator();
const screens = [
  {
    key: 'BottomNavigator',
    name: 'BottomNavigator',
    component: BottomNavigator,
  },
];
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BottomNavigator">
      {screens.map(s => (
        <Stack.Screen name={s.name} component={s.component} />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStack;
