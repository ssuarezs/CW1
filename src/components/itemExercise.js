import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import DelButton from './delButton';

const {width, height} = Dimensions.get('screen');

export default ({item, del, DelO}) => {
  return (
      <View key={item.id} style={styles.wrapper}>
        <View style={{width: 120}}>
            <Text>{item.name}</Text>
        </View>
        <View style={styles.count}>
            <Text>{item.sets}</Text>
            <Text>x</Text>
            <Text>{item.reps}</Text>
            <Text>{item.meas}</Text>
        </View>
        { DelO ? <DelButton onPress={del}/> : null}
      </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#eee',
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    width: width*0.95,
    height: 80,
  },
  count: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    width: width*0.3,
  },
})
