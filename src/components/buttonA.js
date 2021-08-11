import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');

export default ({onPress, title, color}) => {
  return (
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Text style={{...styles.title, color}}>{title}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222831',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    height: 60,
    width: 130,
  },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#EEE',
    },
})
