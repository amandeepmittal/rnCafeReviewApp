import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Custom Navigators
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
