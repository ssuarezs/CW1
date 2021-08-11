import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const {width, height} = Dimensions.get('screen');

export default ({onPress}) => {
  return (
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Entypo name="add-to-list" size={35} color="#536162" />
      </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98DDCA',
    borderRadius: 35,
    height: 70,
    width: 70,
    bottom: 120,
    right: 10,
  },
})
