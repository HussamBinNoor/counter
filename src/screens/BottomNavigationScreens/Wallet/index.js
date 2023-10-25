import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import component from '../../../Assets';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopNavigator from '../../../Navigation/TopNavigator';

const Stack = createNativeStackNavigator();
const screens = [
  {
    key1: 'TopNavigator',
    name: 'TopNavigator',
    component: TopNavigator,
  },
];
const Wallet = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 60, width: '100%', backgroundColor: '#fff'}}>
        <Image style={{height: 70, width: 70}} source={component.headweb} />
        <Image
          style={{
            height: 21,
            width: 20,
            marginTop: 20,
            marginLeft: 15,
            position: 'absolute',
            tintColor: '#100B0099',
          }}
          source={component.shareicon}
        />
        <Image
          style={{
            height: 21,
            width: 100,
            marginTop: 20,
            alignSelf: 'center',
            position: 'absolute',
            tintColor: '#B18D5C',
          }}
          source={component.headlogo}
        />
      </View>

      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="TopNavigator">
        {screens.map(s => (
          <Stack.Screen name={s.name} component={s.component} />
        ))}
      </Stack.Navigator>
      <View
        style={{
          width: 2,
          height: 24,
          backgroundColor: 'black',
          alignSelf: 'center',
          position: 'absolute',
          marginTop: 80,
        }}
      />
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
