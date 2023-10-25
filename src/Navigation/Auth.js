import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login2 from '../screens/AuthScreens/Login2';
import Signup1 from '../screens/AuthScreens/Signup1';
import Referal from '../screens/AuthScreens/Referal';
import RefRecive from '../screens/AuthScreens/RefRecive';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword';
import Reset from '../screens/AuthScreens/Reset';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Signup1">
      <Stack.Screen name="Signup1" component={Signup1} />
      <Stack.Screen name="Login2" component={Login2} />
      <Stack.Screen name="Referal" component={Referal} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="RefRecive" component={RefRecive} />
    </Stack.Navigator>
  );
};

export default AuthStack;
