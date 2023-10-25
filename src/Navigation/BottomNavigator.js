import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import Account from '../screens/BottomNavigationScreens/Account';
import Explore from '../screens/BottomNavigationScreens/Explore';
import Home from '../screens/BottomNavigationScreens/Home';
import QrCode from '../screens/BottomNavigationScreens/QrCode';
import Walet from '../screens/BottomNavigationScreens/Wallet';
import {Image, View} from 'react-native';
import component from '../Assets';
const Tab = createBottomTabNavigator();

function BottomNavigator({navigation}) {
  const [Select, setSelect] = useState(false);
  const onPress = () => {
    setSelect(true);
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#513003',
        tabBarInactiveTintColor: '#51300366',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
          paddingBottom: 20,
          paddingTop: 20,
          height: 80,
        },
      }}>
      <Tab.Screen
        onPress={onPress}
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={component.home}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
                tintColor: focused ? '#513003' : '#51300366',
              }}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        onPress={onPress}
        name="Walet"
        component={Walet}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={component.chat}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
                tintColor: focused ? '#513003' : '#51300366',
              }}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        onPress={onPress}
        name="QrCode"
        component={QrCode}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                backgroundColor: '#B18D5C',
                marginTop: 10,
                height: 60,
                width: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={component.frame}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                  tintColor: '#000',
                }}
                color={color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        onPress={onPress}
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={component.map}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
                tintColor: focused ? '#513003' : '#51300366',
              }}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        onPress={onPress}
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={component.profile}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
                tintColor: focused ? '#513003' : '#51300366',
              }}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
