import React, {forwardRef} from 'react';
import {TextInput as RNTextInput, View, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const TextInput = forwardRef(({icon, error, touched, ...otherProps}, ref) => {
  const validationColor = !touched ? '#223e4b' : error ? '#FF5A5F' : '#223e4b';

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 4,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 4,
      }}>
      <View style={{padding: 8}}>
        <Entypo name={icon} color={validationColor} size={16} />
      </View>
      <View style={{flex: 1}}>
        <RNTextInput
          ref={ref}
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(34, 62, 75, 0.7)"
          {...otherProps}
        />
      </View>
    </View>
  );
});

export default TextInput;
