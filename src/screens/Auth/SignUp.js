import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});
