import React from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Listings({}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Listings</Text>
      <Button title="Sign out" onPress={() => auth().signOut()} />
    </View>
  );
}
