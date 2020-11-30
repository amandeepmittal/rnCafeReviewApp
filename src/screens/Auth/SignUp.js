import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup Screen</Text>
      <Button
        title="Go to sign in"
        color="orange"
        onPress={() => navigation.goBack()}
      />
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
    paddingBottom: 16,
  },
});
