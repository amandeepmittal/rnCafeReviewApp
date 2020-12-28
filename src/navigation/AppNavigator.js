import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import screens
import Listings from '../screens/App/Listings';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Listings" component={Listings} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
