import {createStackNavigator} from '@react-navigation/stack';
import {LogBox} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/Navigation';
import Store from './src/Redux/store';
LogBox.ignoreAllLogs();

const stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};

export default App;
