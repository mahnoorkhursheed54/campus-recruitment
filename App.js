/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigation from './src/Config/navigation'

const App = () => {
  return (
    <AppNavigation/>
  );
};

export default App;
