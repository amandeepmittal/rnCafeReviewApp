import React from 'react';
import {TouchableOpacity, Text, Dimensions} from 'react-native';

const Button = ({label, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 4,
        height: 50,
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cc7351',
        padding: 20,
      }}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={{fontSize: 18, color: 'white', textTransform: 'uppercase'}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
