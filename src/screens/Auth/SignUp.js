import React, {useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BorderlessButton from '../../components/BorderlessButton';

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(50).required(),
});

export default function SignUp() {
  const navigation = useNavigation();
  const email = useRef(null);
  const password = useRef(null);

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    validationSchema: SignUpSchema,
    initialValues: {name: '', email: '', password: ''},
    onSubmit: (values) =>
      alert(
        `Name: ${values.name}, Email: ${values.email}, Password: ${values.password}`
      ),
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create a new account</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            icon="user"
            placeholder="Enter your full name"
            returnKeyType="next"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            error={errors.name}
            touched={touched.name}
            onSubmitEditing={() => email.current?.focus()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            ref={email}
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
        <Button label="Sign up" onPress={handleSubmit} />
        <View style={styles.borderlessButtonWrapper}>
          <BorderlessButton
            placeholder={true}
            placeholderText="Already have an account?"
            onPress={() => navigation.navigate('SignIn')}
            rippleColor="#d7cbb4"
            label="Sign In"
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
