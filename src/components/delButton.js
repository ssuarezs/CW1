import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const {width, height} = Dimensions.get('screen');

export default ({onPress}) => {
  return (
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Entypo name="cross" size={20} color="#555" />
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderRadius: 12,
    height: 24,
    width: 24,
  },
})
