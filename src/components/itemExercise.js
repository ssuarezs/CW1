import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import DelButton from './delButton';
import ExImage from './exeImage';

const {width, height} = Dimensions.get('screen');

export default ({item, del, DelO}) => {

    const info = `${item.sets} x ${item.reps} ${item.meas}`

  return (
      <View key={item.id} style={styles.wrapper}>
        <View style={{width: 120}}>
            <ExImage title={item.name}/>
        </View>
        <View style={styles.count}>
            <Text style={styles.text}>{info}</Text>
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
    backgroundColor: '#778294',
    marginTop: 5,
    borderRadius: 15,
    paddingHorizontal: 10,
    width: width*0.95,
    height: 80,
  },
  count: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 10,
    width: 128,
  },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EEE',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222831',
    },
})
