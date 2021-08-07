import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default ({title, ...rest}) => {
  return (
    <View style={styles.wrapper}>
    <Text>{title}</Text>
    <View style={styles.input}>
        <TextInput {...rest} />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    height: 30,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    marginHorizontal: 10,
    borderRadius: 10,
    height: 30,
    width: 60,
  },
})
