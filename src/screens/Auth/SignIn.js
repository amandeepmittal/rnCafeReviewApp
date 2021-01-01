import React, {useRef} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
// import {BorderlessButton} from 'react-native-gesture-handler';

import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BorderlessButton from '../../components/BorderlessButton';

const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Must have 6 characters')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function SignIn() {
  const password = useRef(null);
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    validationSchema: signInSchema,
    initialValues: {email: '', password: ''},
    onSubmit: (values) =>
      alert(`Email: ${values.email}, Password: ${values.password}`),
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome back!</Text>
      </View>
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
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={errors.email}
            touched={touched.email}
            onSubmitEditing={() => password.current?.focus()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            ref={password}
            icon="key"
            placeholder="Enter your password"
            autoCapitalize="none"
            autoCompleteType="password"
            returnKeyType="go"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={errors.password}
            touched={touched.password}
            onSubmitEditing={() => handleSubmit()}
          />
        </View>
        <Button label="Sign in" onPress={handleSubmit} />
        <View style={styles.borderlessButtonWrapper}>
          <BorderlessButton
            placeholder={true}
            placeholderText="Don't have an account?"
            onPress={() => alert('Pressed')}
            rippleColor="#d7cbb4"
            label="Sign Up!"
          />
        </View>
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
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    color: '#010101',
  },
  borderlessButtonWrapper: {
    alignSelf: 'center',
    marginTop: 16,
  },
});
