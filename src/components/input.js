import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default ({title, ...rest}) => {
  return (
    <View style={styles.wrapper}>
        <View style={styles.right}>
            <Text style={styles.subtitle}>{title}</Text>
        </View>
    <View style={styles.input}>
        <TextInput {...rest} style={styles.subtitle} />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    height: 30,
  },
  right: {
    maxWidth: 120,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222831',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 40,
    minWidth: 60,
    maxWidth: 120,
  },
    subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#EEEEEE',
    },
})
