import React, {useState, useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BorderlessButton from '../../components/BorderlessButton';

const signInSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(50).required(),
});

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
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
    onSubmit: (values) => handleSignIn(values),
  });

  const handleSignIn = async (values) => {
    const {email, password} = values;
    try {
      setIsLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      switch (err.code) {
        case 'auth/invalid-email':
          Toast.show(
            'Please enter a valid email address.',
            Toast.LONG,
            Toast.BOTTOM
          );
          break;
        case 'auth/user-disabled':
          Toast.show(
            'This account has been disabled.',
            Toast.LONG,
            Toast.BOTTOM
          );
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          Toast.show(
            'No user found or wrong password.',
            Toast.LONG,
            Toast.BOTTOM
          );
          break;
        default:
          console.log(err);
          break;
      }
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

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
            onPress={() => navigation.navigate('SignUp')}
            rippleColor="#d7cbb4"
            label="Sign Up!"
          />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <BorderlessButton
            onPress={() => navigation.navigate('ForgotPassword')}
            rippleColor="#d7cbb4"
            label="Forgot Password?"
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
  forgotPasswordContainer: {
    alignSelf: 'center',
    marginTop: 18,
  },
});
