import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import component from '../component';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      //   navigation.navigate('');
    }, 1000);
  }, []);
  return (
    <View style={styles.background}>
      <Image style={styles.bgimage} source={component.watermark} />
      <Image style={styles.logo} source={component.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bgimage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  logo: {
    height: '30%',
    width: '40%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});
export default Splash;
