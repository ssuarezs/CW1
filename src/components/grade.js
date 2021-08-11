import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';

const {width, height} = Dimensions.get('screen');

const source = {
    excelente: require('./assets/excelente.png'),
    bueno: require('./assets/bueno.png'),
    regular: require('./assets/regular.png'),
    malo: require('./assets/malo.png'),
    muerto: require('./assets/muerto.png'),
    inicial: require('./assets/A.png'),
    medio: require('./assets/B.png'),
    avanzado: require('./assets/C.png'),
}

export default ({onPress, title, fixed}) => {

  return (
      <>
      {fixed ?
      <TouchableOpacity style={{...styles.wrapper, backgroundColor: '#222831'}} onPress={onPress}>
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
    backgroundColor: '#393E46',
    marginHorizontal: 10,
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  image: {
    width: 50,
    height: 50,
  },
})
