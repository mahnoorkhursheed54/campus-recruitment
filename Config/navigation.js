import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import First from '../Screens/First';
import Second from '../Screens/Second';
import Third from '../Screens/Third';
import Main from '../Screens/Main';
import studentMenu from '../Screens/studentMenu';
import Profile from '../Screens/Profile';
import companyMenu from '../Screens/companyMenu';
import companiesList from '../Screens/companiesList';

const Stack = createStackNavigator();

function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="First" component={First} />
          <Stack.Screen name="Second" component={Second} />
          <Stack.Screen name="Third" component={Third} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="studentMenu" component={studentMenu} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="companyMenu" component={companyMenu} />
          <Stack.Screen name="companiesList" component={companiesList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigation;