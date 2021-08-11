import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Grade from './grade';

const {width, height} = Dimensions.get('screen');

export default ({item, onPress}) => {
  return (
      <TouchableOpacity key={item.id} onPress={onPress} style={styles.wrapper}>
        <View style={styles.box}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.date}</Text>
        </View>
        <View style={{width: 140}}/>
        <Text style={styles.title2}>{item.time} min</Text>
        <View style={styles.center}>
            <Text style={styles.subtitle}>Estado</Text>
            <Grade title={item.feel} onPress={onPress}/>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#eee',
        borderBottomWidth: 2,
        width: width*0.95,
        height: 100,
    },
    box: {
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: '#222831',
        paddingHorizontal: 20,
        borderRadius: 45,
        height: 70,
        width: 230,
        left: -80,
        paddingLeft: 85,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EEEEEE',
    },
    title2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#EEEEEE',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#EEEEEE',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
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
