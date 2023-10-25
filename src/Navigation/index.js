import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './Auth';
import HomeStack from './HomeStack';
import {useSelector} from 'react-redux';

const Navigation = () => {
  const {isLoggedIn} = useSelector(s => s.auth);

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
