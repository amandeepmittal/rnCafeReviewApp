import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const BorderlessButton = ({
  placeholder = false,
  placeholderText,
  label = '',
  onPress,
  rippleColor,
  marginTop,
}) => {
  return (
    <>
      {placeholder ? (
        <View style={styles.borderlessButtonContainer}>
          <Text style={styles.borderlessButtonPlaceholder}>
            {placeholderText}
          </Text>
          <Pressable
            onPress={onPress}
            android_ripple={{color: rippleColor, borderless: true}}>
            <Text style={styles.borderlessButtonLabel}>{label}</Text>
          </Pressable>
        </View>
      ) : (
        <View style={{marginTop: marginTop}}>
          <Pressable
            onPress={onPress}
            android_ripple={{color: rippleColor, borderless: true}}>
            <Text style={styles.borderlessButtonLabel}>{label}</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  borderlessButtonContainer: {
    flexDirection: 'row',
  },
  borderlessButtonPlaceholder: {
    fontSize: 14,
    color: '#888',
    paddingRight: 4,
  },
  borderlessButtonLabel: {
    fontSize: 14,
    color: '#cc7351',
    paddingRight: 4,
  },
});

export default BorderlessButton;
