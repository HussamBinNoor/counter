import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
// import {useDispatch} from 'react-redux';
// import {setlogout} from '../../Redux/action'; Logout Call
import component from '../../../Assets';
import HomeList from '../../../components/HomeList';

const Home = () => {
  // const dispatch = useDispatch();
  // const signOut = () => {
  //   dispatch(setlogout());
  // };

  return (
    <View style={{flex: 1}}>
      <View style={{height: 60, width: '100%', backgroundColor: '#513003'}}>
        <Image style={{height: 70, width: 70}} source={component.headweb} />
        <Image
          style={{
            height: 21,
            width: 20,
            marginTop: 20,
            marginLeft: 15,
            position: 'absolute',
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
          }}
          source={component.headlogo}
        />
      </View>
      <HomeList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
