import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');

export default ({children, onPress, color}) => {
  return (
      <TouchableOpacity style={{...styles.wrapper, backgroundColor: color}} onPress={onPress}>
        {children}
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    height: 80,
    width: 80,
    bottom: 25,
    right: 10,
  },
})
