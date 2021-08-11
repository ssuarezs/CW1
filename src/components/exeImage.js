import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';

const {width, height} = Dimensions.get('screen');

const source = {
    Push_Ups:   require('./assets/1.png'),
    Pull_Ups:   require('./assets/2.png'),
    Dips:       require('./assets/3.png'),
    Rows:       require('./assets/4.png'),
    Squats:     require('./assets/5.png'),
    Sprints:    require('./assets/6.png'),
    HandStand:  require('./assets/7.png'),
    Core:       require('./assets/8.png'),
}

export default ({onPress, title, fixed}) => {

  return (
      <>
      {fixed ?
      <TouchableOpacity style={{...styles.wrapper, backgroundColor: '#EEE'}} onPress={onPress}>
          <Image style={styles.image} source={source[title]}/>
      </TouchableOpacity>
      :
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
          <Image style={styles.image} source={source[title]}/>
      </TouchableOpacity>
      }
      </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 140,
    height: 70,
  },
  image: {
    width: 140,
    height: 70,
  },
})
