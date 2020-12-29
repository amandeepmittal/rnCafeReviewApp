import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

// import screens
import Listings from '../screens/App/Listings';
import Favorites from '../screens/App/Favorites';
import Profile from '../screens/App/Profile';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#cc7351',
        inactiveTintColor: '#d7cbb4',
        style: {
          backgroundColor: '#fff',
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          switch (route.name) {
            case 'Listings':
              iconName = 'coffee';
              break;
            case 'Favorites':
              iconName = 'heart';
              break;
            case 'Profile':
              iconName = 'user';
              break;
            default:
              break;
          }

          return <Feather name={iconName} color={color} size={24} />;
        },
      })}>
      <Tab.Screen name="Listings" component={Listings} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
