import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');

export default ({onPress, title}) => {
  return (
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bbb',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    height: 50,
    width: 120,
  },
})
