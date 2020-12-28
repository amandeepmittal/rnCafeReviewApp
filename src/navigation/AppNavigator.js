import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import screens
import Listings from '../screens/App/Listings';
import Favorites from '../screens/App/Favorites';
import Profile from '../screens/App/Profile';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Listings" component={Listings} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
