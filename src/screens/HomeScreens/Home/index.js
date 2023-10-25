import React from 'react';
import {Image, Text, View} from 'react-native';
import component from '../../../Assets';
import Button from '../../../components/Button';
import style from './style';
import {useDispatch} from 'react-redux';
import {setlogout} from '../../../Redux/action';
import BottomNavigator from '../../../Navigation/BottomNavigator';

const Home = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(setlogout());
  };
  return (
    <View style={style.mainview}>
      <Button title={'Logout'} textColor={'#fff'} onPress={signOut} />
      <Image style={style.board1img} source={component.board1} />
      <Image style={style.logo} source={component.logo} />
      <View style={style.viewbtm}>
        <Text style={style.text}>Home</Text>
      </View>
      <BottomNavigator />
    </View>
  );
};

export default Home;
