import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Image, View, Text} from 'react-native';
import component from '../Assets';
import Nearest from '../screens/BottomNavigationScreens/Wallet/Nearest';
import Stamped from '../screens/BottomNavigationScreens/Wallet/Stamped';
const Tab = createMaterialTopTabNavigator();

function TopNavigator({navigation}) {
  const onPress = () => {};
  //   const [Select, setSelect] = useState(false);
  //   const onPress = () => {
  //     setSelect(true);
  //   };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicator: false,
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: {
          fontSize: 16,
          borderColor: 'black',
        },
        swipeEnabled: true,
        tabBarIndicatorStyle: {
          width: 15,
          height: 3,
          marginHorizontal: 60,
          marginBottom: 15,
          backgroundColor: 'black',
        },
        tabBarPressColor: {color: '#fff'},
        tabBarStyle: {
          backgroundColor: '#B18D5C',
          paddingTop: 5,
          height: 59,
        },
      }}>
      <Tab.Screen name="Nearest" component={Nearest} />
      <Tab.Screen name="Stamped" component={Stamped} />
    </Tab.Navigator>
    // <Tab.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //     tabBarActiveTintColor: '#513003',
    //     tabBarInactiveTintColor: '#51300366',
    //     tabBarStyle: {
    //       position: 'absolute',
    //       backgroundColor: 'white',
    //       paddingBottom: 20,
    //       paddingTop: 20,
    //       height: 80,
    //     },
    //   }}>
    //   <Tab.Screen
    //     onPress={onPress}
    //     name="Nearest"
    //     component={Nearest}
    //     options={{
    //       tabBarLabel: 'Nearest',
    //       tabBarIcon: ({color, size, focused}) => (
    //         <Image
    //           source={component.home}
    //           style={{
    //             width: 24,
    //             height: 24,
    //             resizeMode: 'contain',
    //             tintColor: focused ? '#513003' : '#51300366',
    //           }}
    //           color={color}
    //           size={size}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     onPress={onPress}
    //     name="Stamped"
    //     component={Stamped}
    //     options={{
    //       tabBarLabel: 'Stamped',
    //       tabBarIcon: ({color, size, focused}) => (
    //         <Image
    //           source={component.chat}
    //           style={{
    //             width: 24,
    //             height: 24,
    //             resizeMode: 'contain',
    //             tintColor: focused ? '#513003' : '#51300366',
    //           }}
    //           color={color}
    //           size={size}
    //         />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>
  );
}

export default TopNavigator;
