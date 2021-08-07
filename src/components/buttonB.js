import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');

export default ({onPress, title, fixed}) => {
  return (
      <>
      {fixed ?
      <TouchableOpacity style={{...styles.wrapper, backgroundColor: '#ccc'}} onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
      }
      </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    minWidth: 80,
  },
})
