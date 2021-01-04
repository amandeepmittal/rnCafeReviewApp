// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import {useFormik} from 'formik';
// import * as Yup from 'yup';
// import auth from '@react-native-firebase/auth';
// import Toast from 'react-native-simple-toast';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import TextInput from '../../components/TextInput';
// import Button from '../../components/Button';
// import Loader from '../../components/Loader';

// const ForgotPasswordSchema = Yup.object().shape({
//   email: Yup.string().email().required(),
// });

// export default function ForgotPassword({navigation}) {
//   const [isLoading, setIsLoading] = useState(false);

//   const {
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     values,
//     errors,
//     touched,
//   } = useFormik({
//     validationSchema: ForgotPasswordSchema,
//     initialValues: {
//       email: '',
//     },
//     onSubmit: (values) => handlePasswordReset(values),
//   });

//   const handlePasswordReset = async () => {
//     const {email} = values;

//     try {
//       setIsLoading(true);
//       await auth().sendPasswordResetEmail(email);
//       navigation.navigate('CheckYourMail', {item: email});
//     } catch (err) {
//       switch (err.code) {
//         case 'auth/invalid-email':
//           // console.log('Please enter a valid email address.');
//           Toast.show(
//             'Please enter a valid email address.',
//             Toast.LONG,
//             Toast.BOTTOM
//           );
//           break;
//         case 'auth/user-disabled':
//           // console.log('This account has been disabled.');
//           Toast.show(
//             'This account has been disabled.',
//             Toast.LONG,
//             Toast.BOTTOM
//           );
//           break;
//         case 'auth/user-not-found':
//           // console.log('No user found or wrong password.');
//           Toast.show(
//             'Invalid email. Please try again.',
//             Toast.LONG,
//             Toast.BOTTOM
//           );
//           break;
//         default:
//           console.log(err);
//           break;
//       }
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 14}}>
//       <View style={{paddingTop: 40, flexDirection: 'row'}}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('SignIn')}
//           activeOpacity={0.7}>
//           <Ionicons name="arrow-back-sharp" color="#010101" size={28} />
//         </TouchableOpacity>
//       </View>
//       <View style={{marginTop: 28, alignItems: 'center'}}>
//         <Text style={{fontSize: 24, color: '#010101'}}>Reset Password</Text>
//         <Text style={{fontSize: 14, color: '#888', marginTop: 4}}>
//           Enter the email associated with your account and we'll send an email
//           with instructions to reset your password.
//         </Text>
//       </View>
//       <View
//         style={{
//           marginTop: 20,
//           alignItems: 'flex-start',
//         }}>
//         <Text
//           style={{
//             fontSize: 14,
//             color: '#888',
//             textTransform: 'uppercase',
//           }}>
//           Email Address
//         </Text>
//         <View style={{width: '100%', marginVertical: 8}}>
//           <TextInput
//             icon="mail"
//             placeholder="Enter your email"
//             autoCapitalize="none"
//             autoCompleteType="email"
//             keyboardType="email-address"
//             onChangeText={handleChange('email')}
//             onBlur={handleBlur('email')}
//             returnKeyType="go"
//             error={errors.email}
//             touched={touched.email}
//             onSubmitEditing={() => handleSubmit()}
//           />
//         </View>
//       </View>
//       <View style={{alignItems: 'center', marginTop: 10}}>
//         <View style={{marginVertical: 14}}>
//           <Button label="Send Instructions" onPress={handleSubmit} />
//         </View>
//       </View>
//     </View>
//   );
// }
