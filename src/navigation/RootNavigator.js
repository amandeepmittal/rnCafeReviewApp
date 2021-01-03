import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import {AuthUserContext} from './AuthUserProvider';
import Loader from '../components/Loader';

// Custom Navigators
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const RootNavigator = () => {
  const {user, setUser} = useContext(AuthUserContext);
  const [isLoading, setIsLoading] = useState(true);

  // Handle user state changes
  function handleOnAuthStateChanged(user) {
    setUser(user);

    if (isLoading) setIsLoading(false);
  }

  useEffect(() => {
    const authSubscriber = auth().onAuthStateChanged(handleOnAuthStateChanged);

    // unsubscribe on unmount
    return authSubscriber;
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
