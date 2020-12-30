import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            returnKeyType="next"
          />
        </View>
        <Button label="Sign in" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  text: {
    fontSize: 20,
    color: '#000',
    paddingBottom: 16,
  },
  formContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
  },
  inputLabel: {
    fontSize: 14,
    color: '#888',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
});
