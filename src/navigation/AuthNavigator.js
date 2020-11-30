import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import Screen files
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';

const Auth = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator headerMode="none">
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
